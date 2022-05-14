import {NgModule} from "@angular/core";
import {HeroListComponent} from "../hero-list/hero-list.component";
import {HeroCardComponent} from "../hero-card/hero-card.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

const components = [
  HeroListComponent,
  HeroCardComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule {
}
