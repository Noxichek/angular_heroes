import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreateNewAccountComponent} from "./login-page/create-new-account/create-new-account.component";
import {HeroSelectionPageComponent} from "./hero-selection-page/hero-selection-page.component";
import {LoginGuardService} from "./login-page/guard/login-guard.service";
import {UserInfoPageComponent} from "./user-info-page/user-info-page.component";
import {FightPageComponent} from "./fight-page/fight-page.component";
import {HeroInfoComponent} from "./hero-info/hero-info.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: CreateNewAccountComponent},
  {path: 'select-hero', component: HeroSelectionPageComponent, canActivate: [LoginGuardService]},
  {path: 'user-info', component: UserInfoPageComponent, canActivate: [LoginGuardService]},
  {path: 'battle', component: FightPageComponent, canActivate: [LoginGuardService]},
  {path: 'hero-info/:id', component: HeroInfoComponent, canActivate: [LoginGuardService]},
  {path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
