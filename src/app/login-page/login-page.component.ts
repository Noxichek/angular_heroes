import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('inputEmail') inputEmail!: ElementRef

  isVisible: boolean = false;
  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\w*\.?\w*\.?\w*\.?\w*@\w{1,5}\.(com|net|org|co|us)$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d$%.&!]{5,}$')
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+(\\s|-|[A-Z])[a-zA-Z]+$')
      ])
    })
  }

  newUser() {
    this.isVisible = !this.isVisible;
    this.form.reset();
  }


}
