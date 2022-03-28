import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent implements OnInit {
  @Output() onChanged = new EventEmitter<void>();
  createForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+(\\s|-|[A-Z])[a-zA-Z]+$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\w*\.?\w*\.?\w*\.?\w*@\w{1,5}\.(com|net|org|co|us)$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d$%.&!]{5,}$')
      ])
    })
  };

  submit() {
    if (this.createForm.invalid) {
      return
    }

    const user: User = {
      email: this.createForm.value.email,
      password: this.createForm.value.password,
      username: this.createForm.value.username
    }
    console.log(user)
  }

  newUser() {
    this.createForm.reset();
    this.onChanged.emit()
  }
}
