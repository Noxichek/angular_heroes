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
import { RecentSearchesComponent } from './hero-selection-page/recent-searches/recent-searches.component';
import { HeroesComponent } from './user-info-page/heroes/heroes.component';
import { HistoryComponent } from './user-info-page/history/history.component';
import { PowerupsComponent } from './user-info-page/powerups/powerups.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import {UserInfoRouterModule} from "./user-info-page/user-info-router/user-info-router.module";
import { FightPageComponent } from './fight-page/fight-page.component';
import { LoadingComponent } from './fight-page/loading/loading.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignInComponent,
    CreateNewAccountComponent,
    HeroSelectionPageComponent,
    AlphabeticSelectComponent,
    RecentSearchesComponent,
    HeroesComponent,
    HistoryComponent,
    PowerupsComponent,
    HeroListComponent,
    HeroCardComponent,
    FightPageComponent,
    LoadingComponent,
    HeroInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserInfoRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
