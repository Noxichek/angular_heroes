import {Component, Input} from '@angular/core';
import {Hero, UserStateKeys} from "../shared/interfaces";
import {StoreService} from "../global/services/store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero: Hero = {} as Hero;
  id!: number;

  constructor(private storeService: StoreService,
              private activateRoute: ActivatedRoute,
              private router: Router
  ) {
    this.id = this.hero.id
  }

  addToSelectedHeroes() {
    this.storeService.changeUserState<Hero>(UserStateKeys.SelectedHero, {...this.hero, isSelected: true});
    this.storeService.patchUserState<Hero>(UserStateKeys.SelectedHeroes, {...this.hero, isSelected: true});
    this.hero.isSelected = true;
  }

  unselectHeroFromList() {
    this.hero.isSelected = false;
    this.storeService.removeHeroById(this.hero.id);
  }

  goToHeroInfo() {
    this.router.navigate(['hero-info']);
  }
}
