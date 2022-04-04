import {Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User, UserSession} from "../../shared/interfaces";
import {addHoursToDate} from "../../shared/helpers/helper";
import {LocalstorageKeys} from "../constants/localstorage-keys";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserStream = new BehaviorSubject<User | null>(null);

  public get currentUser$(): Observable<User | null> {
    return this.currentUserStream.asObservable();
  }

  public get currentUser(): User | null {
    return this.currentUserStream.getValue();
  }

  public set currentUser(user: User | null) {
    this.currentUserStream.next(user);
  }

  constructor(private localStorageService: LocalStorageService) {
    const userSession = localStorageService.getData<UserSession>(LocalstorageKeys.sessionKey);

    this.currentUser = userSession.user;

    console.log(this.currentUser.userState?.recentSearch)
  }

  initSession(user: User): void {
    const dateNow = new Date();

    this.localStorageService.setData(LocalstorageKeys.sessionKey, {user, sessionStartTime: dateNow});
    this.currentUser = user;

  }

  isSessionActive(): boolean {
    const email = this.currentUser?.email;
    const {sessionStartTime} = this.localStorageService.getData<UserSession>(LocalstorageKeys.sessionKey);
    const dateNow = new Date();

    if (!email) {
      return false;
    }
    return addHoursToDate(new Date(sessionStartTime), 1) > dateNow;
  }

  setHeroesToStorage(newState: any) {
    const allUsers = this.localStorageService.getData<User[]>(LocalstorageKeys.usersKey)
    const currentUserKey = this.currentUser?.email
    const updatedUsers = allUsers.map(el => {
      if(el.email !== currentUserKey) {
        return el
      } else {
        return {...el, userState: newState}
      }
    })
    this.localStorageService.setData(LocalstorageKeys.usersKey, updatedUsers)
  }

}
