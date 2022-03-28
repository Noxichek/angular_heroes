import {Validators as AngularValidators} from "@angular/forms";

export class Validators {
  static get email() {
    return  [
      AngularValidators.required,
      AngularValidators.email,
      AngularValidators.pattern(/^\w*\.?\w*\.?\w*\.?\w*@\w{1,5}\.(com|net|org|co|us)$/)
    ]
  }

  static get password() {
    return [
      AngularValidators.required,
      AngularValidators.minLength(5),
      AngularValidators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d$%.&!]{5,}$')
    ]
  }

  static get username() {
    return [
      AngularValidators.required,
      AngularValidators.pattern('^[a-zA-Z]+(\\s|-|[A-Z])[a-zA-Z]+$')
    ]
  }
}
