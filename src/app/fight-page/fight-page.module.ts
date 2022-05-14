import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FightPageComponent} from "./fight-page.component";
import {LoadingComponent} from "./loading/loading.component";
import {RouterModule} from "@angular/router";
import {LoginGuardService} from "../login-page/guard/login-guard.service";

const components = [FightPageComponent, LoadingComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FightPageComponent, canActivate: [LoginGuardService]}
    ])
  ],
  exports: [...components]
})
export class FightPageModule { }
