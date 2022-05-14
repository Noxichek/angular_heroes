import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserInfoPageComponent} from "../user-info-page.component";
import {LoginGuardService} from "../../login-page/guard/login-guard.service";
import {HeroesComponent} from "../heroes/heroes.component";
import {HistoryComponent} from "../history/history.component";
import {PowerupsComponent} from "../powerups/powerups.component";


@NgModule({
  declarations: [UserInfoPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserInfoPageComponent,
        canActivate: [LoginGuardService],
        children: [
          {path: 'heroes', component: HeroesComponent},
          {path: 'history', component: HistoryComponent},
          {path: 'powerups', component: PowerupsComponent},
        ],
      },
      {path: '**', redirectTo: '/select-hero'}
    ])
  ]
})
export class UserInfoRouterModule {
}
