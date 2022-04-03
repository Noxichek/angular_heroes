import {Component, ElementRef, ViewChild} from '@angular/core';
import {FetchService} from "../global/services/fetch.service";
import {Letter} from "../models/alphabet.model";

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {
  @ViewChild('searchInput', {static: false}) inputRef!: ElementRef

  searchValue: string = '';
  stats: Array<any> = [];
  heroes: Array<any> = [];

  constructor(private fetchService: FetchService) {
    fetchService.getRandomHero().subscribe(response => {
      this.heroes = [response]
    })
  }

  search() {
    if (this.searchValue.length === 1) {
      this.fetchService.getHeroesByName(this.searchValue)
        .subscribe(response => {
          this.heroes = response.filter(el => el.name[0].toLowerCase().includes(this.searchValue.toLowerCase()))
          this.searchValue = ''
        })
    } else {
      this.fetchService.getHeroesByName(this.searchValue)
        .subscribe(response => {
          this.heroes = response.filter(el => el.name.toLowerCase().includes(this.searchValue.toLowerCase()))
          this.searchValue = ''
        })
    }

  }

  onLetterSelected(letter: Letter) {
    this.searchValue = letter
    this.search()
  }
}
