import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isSignInView = true

  constructor() {
  }


  ngOnInit(): void {

  }


  changeView() {
    this.isSignInView = !this.isSignInView
  }
}
