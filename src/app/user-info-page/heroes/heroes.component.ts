import {Component} from '@angular/core';
import {StoreService} from "../../global/services/store.service";
import {Hero} from "../../shared/interfaces";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHeroes: Array<Hero> = []

  constructor(public storeService: StoreService) {
  }

}
