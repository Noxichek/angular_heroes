import {Component, OnInit} from '@angular/core';
import {Powerup, UserStateKeys} from "../../shared/interfaces";
import {StoreService} from "../../global/services/store.service";

@Component({
  selector: 'app-powerups',
  templateUrl: './powerups.component.html',
  styleUrls: ['./powerups.component.css']
})
export class PowerupsComponent implements OnInit {
  powerups!: Powerup[]

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.powerups = this.storeService.userState[UserStateKeys.Powerups]
  }


}
