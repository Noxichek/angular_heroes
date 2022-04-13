import {Component} from '@angular/core';
import {StoreService} from "../../global/services/store.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(public storeService: StoreService) {
  }


}
