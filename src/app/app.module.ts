import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { CreateNewAccountComponent } from './login-page/create-new-account/create-new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignInComponent,
    CreateNewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
