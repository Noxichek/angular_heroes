import {Component, OnDestroy, OnInit} from '@angular/core';
import {FetchService} from "../global/services/fetch.service";
import {Letter} from "../models/alphabet.model";
import {StoreService} from "../global/services/store.service";
import {Hero, UserStateKeys} from "../shared/interfaces";
import {Subscription} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent implements OnInit, OnDestroy {

  searchValue: string = '';
  stats = [];
  heroes: Array<Hero> = [];
  randomHeroSub: Subscription;
  heroByNameSub: Subscription;
  searchForm: FormGroup;
  inputSearch: any;

  constructor(private fetchService: FetchService, public storeService: StoreService) {
  }

  ngOnInit(): void {
    this.randomHeroSub = this.fetchService.getRandomHero().subscribe(response => {
      this.heroes = [response]
    })
  }

  search() {
    const value = this.searchValue.toString().toLowerCase().trim()
    if (value.length === 0) {
      alert('NO! NO! NO!')
      this.searchValue = ''
      return
    }
    if (value.length === 1) {
      this.heroByNameSub = this.fetchService.getHeroesByName(value)
        .subscribe(response => {
          this.heroes = response.filter(el => el.name[0].toLowerCase().includes(value.toLowerCase()))
          this.storeService.patchUserState(UserStateKeys.RecentSearch, value)
          this.searchValue = ''
        })
    } else {
      this.heroByNameSub = this.fetchService.getHeroesByName(value)
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

  ngOnDestroy(): void {
    this.heroByNameSub.unsubscribe();
    this.randomHeroSub.unsubscribe()
  }

}
