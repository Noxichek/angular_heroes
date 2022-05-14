import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreateNewAccountComponent} from "./login-page/create-new-account/create-new-account.component";
import {LoginGuardService} from "./login-page/guard/login-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: CreateNewAccountComponent},
  {path: 'select-hero', loadChildren: () => import('./hero-selection-page/hero-selection-page.module').then(x => x.HeroSelectionPageModule), canActivate: [LoginGuardService]},
  {path: 'user-info', loadChildren: () => import('./user-info-page/user-info-router/user-info-router.module').then(x => x.UserInfoRouterModule), canActivate: [LoginGuardService]},
  {path: 'battle', loadChildren: () => import('./fight-page/fight-page.module').then(x => x.FightPageModule), canActivate: [LoginGuardService]},
  {path: 'hero-info/:id', loadChildren: () => import('./hero-info/hero-info.module').then(x => x.HeroInfoModule), canActivate: [LoginGuardService]},
  {path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


