import {Component, OnInit} from '@angular/core';
import {Hero, Powerup} from "../shared/interfaces";
import {StoreService, UserStateKeys} from "../global/services/store.service";
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
  myheroPowerstats = {}
  powerups!: Powerup[];
  isPowerupActiveInCurrentFight = {};
  isBattleOver: boolean = false;
  winner: string = ''

  constructor(
    private storeService: StoreService,
    private fetchService: FetchService,
    private battleService: BattleService
  ) {
  }

  ngOnInit(): void {
    this.getMyHero()
    this.getEnemyHero()
    this.powerups = this.storeService.userState[UserStateKeys.Powerups]
    this.myheroPowerstats = {...this.myHero.powerstats}
    this.setPowerupsStatusInCurrentFight()
  }

  fight(): void {
    this.isFightNow = true;
    of('').pipe(delay(5000)).subscribe(() => {
      this.winner = this.battleService.letsFight(this.myHero, this.enemyHero)
      this.isFightNow = false
      this.myheroPowerstats = {...this.myHero.powerstats}
      this.isBattleOver = true
    })
  }

  addPowerups(statName: string): void {
    const currentPowerup = this.powerups.find(el => el.statName === statName)
    this.myheroPowerstats[statName] = (Number(this.myHero.powerstats[statName]) + 10).toString()
    currentPowerup.usesLeft = currentPowerup.usesLeft - 1
    this.isPowerupActiveInCurrentFight[statName] = false
    this.storeService.changeUserState(UserStateKeys.Powerups, [...this.powerups])
  }

  private setPowerupsStatusInCurrentFight(): void {
    this.isPowerupActiveInCurrentFight = this.powerups.reduce((acc, el) => {
      return {...acc, [el.statName]: true}
    }, {});
  }

  private getMyHero(): void {
    this.myHero = this.storeService.userState[UserStateKeys.SelectedHero];
  }

  private getEnemyHero(): void {
    this.fetchService.getRandomHero().subscribe(randomHero => {
      this.enemyHero = randomHero
    })
  }


}
