import {Component} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  isSignInView = true

  changeView(): void {
    this.isSignInView = !this.isSignInView
  }
}
