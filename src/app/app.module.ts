import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { CreateNewAccountComponent } from './login-page/create-new-account/create-new-account.component';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import {HttpClientModule} from "@angular/common/http";
import { AlphabeticSelectComponent } from './hero-selection-page/alphabetic-select/alphabetic-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignInComponent,
    CreateNewAccountComponent,
    HeroSelectionPageComponent,
    AlphabeticSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
