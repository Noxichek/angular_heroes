import {Component, OnDestroy} from '@angular/core';
import {LocalStorageService} from "./global/services/local-storage.service";
import {Router} from "@angular/router";
import {UserService} from "./global/services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              public userService: UserService,
  ) {
  }


  logout() {
    this.localStorageService.removeData('currentSession')
    this.router.navigate(['login'])
  }

  navigateToUserInfo() {
    if (this.userService.isSessionActive()) {
      this.router.navigate(['user-info'])
    }
  }
}
