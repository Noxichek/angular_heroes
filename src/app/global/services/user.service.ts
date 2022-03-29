import {Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../shared/interfaces";
import {addHoursToDate} from "../../shared/helpers/helper";

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
  }

  initSession(user: User): void {
    const dateNow = new Date()

    this.localStorageService.setData(user.email, dateNow);
    this.currentUser = user;

  }

  isSessionActive(): boolean {
    const email = this.currentUser?.email
    const dateNow = new Date()

    if(!email) {
      return false
    }
    return addHoursToDate(new Date(this.localStorageService.getData(email)), 1) > dateNow
  }


}
