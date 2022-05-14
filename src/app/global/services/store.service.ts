import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {Hero, UserState, UserStateKeys} from "../../shared/interfaces";

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

  constructor(private userService: UserService) {
    this.initUserState()
  }

  initUserState() {
    if (this.userService.currentUser?.userState) {
      this.userState = this.userService.currentUser.userState;
    }
  }

  changeUserState<T>(key: string, value: T): void {
    this.userState = {...this.userState, [key]:value}
    this.userService.setHeroesToStorage(this.userState)
    this.userService.updateSession(this.userState)
  }

  patchUserState<T>(key: UserStateKeys, value: T): void {
    const prop = this.userState[key];
    if(!Array.isArray(prop)) {
      this.userState = {...this.userState, [key]:{...prop, ...value}}
    } else if(Array.isArray(prop)) {
      this.userState = {...this.userState, [key]:[...prop, value]}
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
}

