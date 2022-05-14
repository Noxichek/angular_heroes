import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInComponent} from './login-page/sign-in/sign-in.component';
import {CreateNewAccountComponent} from './login-page/create-new-account/create-new-account.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroesComponent} from './user-info-page/heroes/heroes.component';
import {HistoryComponent} from './user-info-page/history/history.component';
import {PowerupsComponent} from './user-info-page/powerups/powerups.component';
import {SharedModule} from "./shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignInComponent,
    CreateNewAccountComponent,
    HeroesComponent,
    HistoryComponent,
    PowerupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
