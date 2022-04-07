import {Injectable} from "@angular/core";
import {Hero} from "../../shared/interfaces";
import {StoreService, UserStateKeys} from "./store.service";

@Injectable({
  providedIn: 'root'
})

export class BattleService {

  constructor(private storeService: StoreService) {
  }

  letsFight(myHero: Hero, enemyHero: Hero) {
    const myHeroStats = this.calcStats(myHero.powerstats)
    const enemyHeroPowerStats = this.calcStats(enemyHero.powerstats)

    if (myHeroStats > enemyHeroPowerStats) {
      this.storeService.patchUserState(UserStateKeys.BattleHistory, {
        winner: 'Win',
        date: new Date(),
        myHero: myHero.name,
        enemyHero: enemyHero.name,
        myHeroId: myHero.id,
        enemyHeroId: enemyHero.id
      })
      return myHero.name
    } else if (myHeroStats < enemyHeroPowerStats) {
      this.storeService.patchUserState(UserStateKeys.BattleHistory, {
        winner: 'Loose',
        date: new Date(),
        myHero: myHero.name,
        enemyHero: enemyHero.name,
        myHeroId: myHero.id,
        enemyHeroId: enemyHero.id
      })
      return enemyHero.name
    } else {
      alert('Ooops, this fight doesn`t make sense!')
      return ''
    }
  }

  calcStats(obj: Object) {
    const myHeroStats = Object.values(obj).filter(el => el !== 'null').map(el => Number(el))
    if (myHeroStats.length !== 0) {
      return myHeroStats.reduce((el, acc) => el + acc, 0)
    } else {
      myHeroStats[0] = 0
      return myHeroStats.reduce((el, acc) => el + acc, 0)
    }

  }

}
