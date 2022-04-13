import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from 'src/app/shared/validators/validators';
import {LocalStorageService} from "../../global/services/local-storage.service";
import {powerups, User, UserStateKeys} from "../../shared/interfaces";
import {LocalstorageKeys} from "../../global/constants/localstorage-keys";
import {UserService} from "../../global/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../../global/services/store.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  @Output() onChanged = new EventEmitter<void>();
  form: FormGroup = this.initForm();
  sub: Subscription;

  constructor(private readonly localStorageService: LocalStorageService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private storeService: StoreService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(p => {
      if (p['expired'] === 'false') {
        alert('Your current session has expired. Please login\n' +
          'again to continue using this app!')
      }
    })
  }


  createNewUser(): void {
    this.form.reset();
  }

  signIn() {
    const user = this.getExistedUser()

    if (user?.password === this.form.value.password) {
      this.userService.initSession(user!)
      this.storeService.initUserState()
      this.router.navigate(['select-hero'])
      if (this.storeService.userState[UserStateKeys.Powerups].length === 0) {
        this.storeService.changeUserState(UserStateKeys.Powerups, powerups)
      }
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

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
