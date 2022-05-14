import {NgModule} from "@angular/core";
import {HeroSelectionPageComponent} from "./hero-selection-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginGuardService} from "../login-page/guard/login-guard.service";
import {AlphabeticSelectComponent} from "./alphabetic-select/alphabetic-select.component";
import {RecentSearchesComponent} from "./recent-searches/recent-searches.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HeroSelectionPageComponent,
    AlphabeticSelectComponent,
    RecentSearchesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: HeroSelectionPageComponent, canActivate: [LoginGuardService]}
    ])
  ],
})
export class HeroSelectionPageModule {
}
