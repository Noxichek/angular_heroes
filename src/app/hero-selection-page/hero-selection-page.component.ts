import {Component, OnDestroy, OnInit} from '@angular/core';
import {FetchService} from "../global/services/fetch.service";
import {Letter} from "../models/alphabet.model";
import {StoreService} from "../global/services/store.service";
import {Hero, UserStateKeys} from "../shared/interfaces";
import {Subject, takeUntil} from "rxjs";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent implements OnInit, OnDestroy {

  stats = [];
  heroes: Array<Hero> = [];
  searchInput: FormControl = new FormControl('', Validators.pattern('^[a-zA-Z ]*$'));
  private unsubscribeOnDestroy$ = new Subject<boolean>();

  constructor(private fetchService: FetchService, public storeService: StoreService) {
  }

  ngOnInit(): void {
    this.fetchService.getRandomHero().pipe(takeUntil(this.unsubscribeOnDestroy$))
      .subscribe(response => {
      this.heroes = [response];
    })
  }

  search() {
    const value = this.searchInput.value.toString().toLowerCase().trim()
    if (value.length === 0) {
      alert('NO! NO! NO!')
      this.searchInput.setValue('')
      return
    }
    if (value.length === 1) {
      this.fetchService.getHeroesByName(value).pipe(takeUntil(this.unsubscribeOnDestroy$))
        .subscribe(response => {
          this.heroes = response.filter(el => el.name[0].toLowerCase().includes(value.toLowerCase()));
          this.storeService.patchUserState(UserStateKeys.RecentSearch, value);
          this.searchInput.setValue('');
        })
    } else {
      this.fetchService.getHeroesByName(value).pipe(takeUntil(this.unsubscribeOnDestroy$))
        .subscribe(response => {
          this.heroes = response.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
          this.storeService.patchUserState(UserStateKeys.RecentSearch, value);
          this.searchInput.setValue('');
        })
    }
  }

  onLetterSelected(letter: Letter) {
    this.searchInput.setValue(letter);
    this.search();
  }

  addValueToInput(el: string) {
    this.searchInput.setValue(el);
    this.search();
  }

  ngOnDestroy(): void {
    this.unsubscribeOnDestroy$.next(true);
  }

}
