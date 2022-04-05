import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserInfoPageComponent} from "../user-info-page.component";
import {LoginGuardService} from "../../login-page/guard/login-guard.service";
import {HeroesComponent} from "../heroes/heroes.component";
import {HistoryComponent} from "../history/history.component";
import {PowerupsComponent} from "../powerups/powerups.component";

const routes: Routes = [
  {
    path: 'user-info',
    component: UserInfoPageComponent,
    canActivate: [LoginGuardService],
    children: [
      {path: 'heroes', component: HeroesComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'powerups', component: PowerupsComponent},
    ],
  },
  {path:'**', redirectTo:'/select-hero'}
]

@NgModule({
  declarations: [UserInfoPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserInfoRouterModule { }
