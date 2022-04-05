import {Component, OnInit} from '@angular/core';
import {Hero} from "../shared/interfaces";
import {StoreService, UserStateKeys} from "../global/services/store.service";
import {LocalStorageService} from "../global/services/local-storage.service";
import {FetchService} from "../global/services/fetch.service";
import {BattleService} from "../global/services/battle.service";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-fight-page',
  templateUrl: './fight-page.component.html',
  styleUrls: ['./fight-page.component.scss']
})
export class FightPageComponent implements OnInit {
  myHero!: Hero;
  enemyHero!: Hero;
  isFightNow = false;

  constructor(
    private storeService: StoreService,
    private fetchService: FetchService,
    private battleService: BattleService
  ) {
  }

  ngOnInit(): void {
    this.getMyHero()
    this.getEnemyHero()
  }

  getMyHero(): void {
    this.myHero = this.storeService.userState[UserStateKeys.SelectedHero]
  }

  getEnemyHero(): void {
    this.fetchService.getRandomHero().subscribe(randomHero => {
      this.enemyHero = randomHero
    })
  }

  fight() {
    this.isFightNow = true;
    of('').pipe(delay(5000)).subscribe(() => {
      this.battleService.letsFight(this.myHero, this.enemyHero)
      this.isFightNow = false
    })
  }
}
