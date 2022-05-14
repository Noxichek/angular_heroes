import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroInfoComponent} from "./hero-info.component";
import {RouterModule} from "@angular/router";
import {LoginGuardService} from "../login-page/guard/login-guard.service";



@NgModule({
  declarations: [HeroInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HeroInfoComponent, canActivate: [LoginGuardService]}
    ])
  ],
  exports: [HeroInfoComponent]
})
export class HeroInfoModule { }
