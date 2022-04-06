import {Component, OnInit} from '@angular/core';
import {StoreService, UserStateKeys} from "../../global/services/store.service";
import {Battle} from "../../shared/interfaces";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  isDate: boolean = false;
  battles: Battle[] = [];
  isSorted: boolean = true

  constructor(public storeService: StoreService) {

  }

  ngOnInit(): void {
    this.battles = [...this.storeService.userState[UserStateKeys.BattleHistory]]
    console.log(this.battles)
  }


  sortByDate() {
    if(this.isSorted) {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a:Battle, b:Battle) => new Date(b.date).getTime() - new Date(a.date).getTime())
      this.isSorted = !this.isSorted
    } else {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a:Battle, b:Battle) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.isSorted = !this.isSorted
    }
  }

  sortByName() {
    if(this.isSorted) {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(a.myHero < b.myHero) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    } else {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(b.myHero < a.myHero) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    }
  }

  sortByEnemyName() {
    if(this.isSorted) {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(a.enemyHero < b.enemyHero) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    } else {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(b.enemyHero < a.enemyHero) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    }
  }

  sortByWinner() {
    if(this.isSorted) {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(a.winner < b.winner) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    } else {
      this.storeService.userState[UserStateKeys.BattleHistory].sort((a: Battle, b: Battle) => {
        if(b.winner < a.winner) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    }
  }
}
