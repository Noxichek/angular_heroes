import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from "../../shared/validators/validators";
import {LocalStorageService} from "../../global/services/local-storage.service";
import {LocalstorageKeys} from "../../global/constants/localstorage-keys";
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent {
  @Output() onChanged = new EventEmitter<void>();
  createForm: FormGroup = this.initForm();

  constructor(private readonly localStorageService: LocalStorageService) {
  }

  switchToLogin(): void {
    this.createForm.reset();
  };

  createNewUser(): void {
    if (this.checkIfEmailExist()) {
      alert('This email cant used')
    } else {
      const customUser = this.createForm.value
      const users = this.localStorageService.getData<User[]>(LocalstorageKeys.usersKey) || []

      this.localStorageService.setData<User[]>(LocalstorageKeys.usersKey, [...users, customUser])
      this.createForm.reset()
    }
  }

  private checkIfEmailExist(): boolean {
    const users = this.localStorageService.getData<User[]>(LocalstorageKeys.usersKey) || []
    const customUserEmail = this.createForm.value.email

    return users.some((user) => {
      return user.email === customUserEmail
    })
  }

  private initForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', Validators.username),
      email: new FormControl('', Validators.email),
      password: new FormControl(null, Validators.password)
    })
  }

}
