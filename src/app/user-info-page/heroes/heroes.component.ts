import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../global/services/store.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
  }

}
