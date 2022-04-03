import {Component, Input} from '@angular/core';
import {Hero} from "../shared/interfaces";
import {StoreService, UserStateKeys} from "../global/services/store.service";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero: Hero = {} as Hero

  constructor(private storeService: StoreService) {
  }


  addToSelectedHeroes() {
    this.storeService.changeUserState<Hero>(UserStateKeys.SelectedHero, {...this.hero, isSelected: true});
    this.storeService.patchUserState<Hero>(UserStateKeys.SelectedHeroes, {...this.hero, isSelected: true});
    this.hero.isSelected = true
  }

  unselectHeroFromList() {
    this.hero.isSelected = false
    this.storeService.removeHeroById(this.hero.id)
  }
}
