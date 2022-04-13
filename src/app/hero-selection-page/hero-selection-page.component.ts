import {Component} from '@angular/core';
import {FetchService} from "../global/services/fetch.service";
import {Letter} from "../models/alphabet.model";
import {StoreService} from "../global/services/store.service";
import {UserStateKeys} from "../shared/interfaces";

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {

  searchValue: string = '';
  stats: Array<any> = [];
  heroes: Array<any> = [];

  constructor(private fetchService: FetchService, public storeService: StoreService) {
    fetchService.getRandomHero().subscribe(response => {
      this.heroes = [response]
    })
  }

  search() {
    const value = this.searchValue.toString().toLowerCase().trim()
    if(value.length === 0) {
      alert('NO! NO! NO!')
      this.searchValue = ''
      return
    }
    if (value.length === 1) {
      this.fetchService.getHeroesByName(value)
        .subscribe(response => {
          this.heroes = response.filter(el => el.name[0].toLowerCase().includes(value.toLowerCase()))
          this.storeService.patchUserState(UserStateKeys.RecentSearch, value)
          this.searchValue = ''
        })
    } else {
      this.fetchService.getHeroesByName(value)
        .subscribe(response => {
          this.heroes = response.filter(el => el.name.toLowerCase().includes(value.toLowerCase()))
          this.storeService.patchUserState(UserStateKeys.RecentSearch, value)
          this.searchValue = ''
        })
    }
  }

  onLetterSelected(letter: Letter) {
    this.searchValue = letter
    this.search()
  }

  addValueToInput(el: string) {
    this.searchValue = el
    this.search()
  }
}
