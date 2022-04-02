import {Component} from '@angular/core';
import {FetchService} from "../global/services/fetch.service";

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {
  searchValue: string = '';
  stats: Array<any> = [];
  heroes: Array<any> = [];


  constructor(private fetchService: FetchService) {
  }

  search() {
    this.fetchService.getHeroesByName(this.searchValue.trim())
      .subscribe(response => {
        this.searchValue = ''
        this.heroes = response
      })
  }


}
