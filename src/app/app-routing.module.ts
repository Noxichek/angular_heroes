import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreateNewAccountComponent} from "./login-page/create-new-account/create-new-account.component";
import {HeroSelectionPageComponent} from "./hero-selection-page/hero-selection-page.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: CreateNewAccountComponent},
  {path: 'select-hero', component: HeroSelectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
