import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {Hero, UserState, UserStateKeys} from "../../shared/interfaces";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  userState: UserState = {
    selectedHeroes: [] ,
    selectedHero: {} as Hero,
    battleHistory: [],
    powerups: [],
    recentSearch: []
  }

  asyncUserState = {
    selectedHeroes$: new BehaviorSubject([]),
    selectedHero$: new BehaviorSubject({}),
    battleHistory$: new BehaviorSubject([]),
    powerups$: new BehaviorSubject([]),
    recentSearch$: new BehaviorSubject([])
  }

  constructor(private userService: UserService) {
    this.initUserState()
  }

  initUserState() {
    if (this.userService.currentUser?.userState) {
      this.userState = this.userService.currentUser.userState;

      const {selectedHeroes, selectedHero, battleHistory, powerups, recentSearch} = this.userService.currentUser.userState

      this.asyncUserState.selectedHeroes$.next(selectedHeroes)
      this.asyncUserState.selectedHero$.next(selectedHero)
      this.asyncUserState.battleHistory$.next(battleHistory)
      this.asyncUserState.powerups$.next(powerups)
      this.asyncUserState.recentSearch$.next(recentSearch)
    }
  }

  changeUserState<T>(key: string, value: T): void {
    this.userState = {...this.userState, [key]:value}
    this.userService.setHeroesToStorage(this.userState)
    this.userService.updateSession(this.userState)

    this.asyncUserState[this.getAsyncKey(key)].next(value)
  }

  patchUserState<T>(key: UserStateKeys, value: T): void {
    const prop = this.userState[key];
    const asyncProp = this.asyncUserState[this.getAsyncKey(key)].getValue();

    if(!Array.isArray(prop)) {
      this.userState = {...this.userState, [key]:{...prop, ...value}}

      this.asyncUserState[this.getAsyncKey(key)].next({...asyncProp, ...value})

    } else if(Array.isArray(prop)) {
      this.userState = {...this.userState, [key]:[...prop, value]}

      this.asyncUserState[this.getAsyncKey(key)].next([...asyncProp, value])
    }
    this.userService.setHeroesToStorage(this.userState)
    this.userService.updateSession(this.userState)
  }

  getFromUserState(key: UserStateKeys): any {
    return this.userState[key];
  }

  removeItem(key: UserStateKeys, id: number | string) {
    const prop = this.userState[key];

    if(Array.isArray(prop)) {
      const newValue = prop.filter(({ id: propId }) => propId !== id)
      this.changeUserState(key, newValue)
    } else {
      this.changeUserState(key, {})
    }
  }

  removeHeroById(id: number | string) {
    if(this.userState.selectedHero.id === id) {
      this.userState.selectedHero = this.userState.selectedHeroes.at(-2) || {}

      const selectedHeroes: any = this.asyncUserState.selectedHeroes$.getValue()

      this.asyncUserState.selectedHero$.next(selectedHeroes.at(-2) || {})
    }
    this.removeItem(UserStateKeys.SelectedHeroes, id)
  }

  clearUserState() {
    this.userState = {
      selectedHeroes: [] ,
      selectedHero: {} as Hero,
      battleHistory: [],
      powerups: [],
      recentSearch: []
    }
  }

  private getAsyncKey(key: string) {
    return `${key}$`
  }
}

