import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from 'src/app/shared/validators/validators';
import {LocalStorageService} from "../../global/services/local-storage.service";
import {User} from "../../shared/interfaces";
import {LocalstorageKeys} from "../../global/constants/localstorage-keys";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Output() onChanged = new EventEmitter<void>();
  form: FormGroup = this.initForm()

  constructor(private readonly localStorageService: LocalStorageService) {
  }


  createNewUser(): void {
    this.form.reset();
    this.onChanged.emit();
  }

  signIn() {
    const user = this.getExistedUser()

    if (user?.password === this.form.value.password) {

    } else {
      alert('Invalid email or password')
    }

  }


  private initForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(null, Validators.password)
    })
  }

  private getExistedUser(): User | undefined {
    const users = this.localStorageService.getData<User[]>(LocalstorageKeys.usersKey) || []
    const customUserEmail = this.form.value.email

    return users.find(({email}) => email === customUserEmail)
  }
}
