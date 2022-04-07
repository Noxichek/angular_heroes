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
  }

  sortByDate() {
    if (this.isSorted) {
      this.battles = [...this.storeService.userState[UserStateKeys.BattleHistory]].sort((a: Battle, b: Battle) => new Date(b.date).getTime() - new Date(a.date).getTime())
      this.isSorted = !this.isSorted
    } else {
      this.battles = [...this.storeService.userState[UserStateKeys.BattleHistory]].sort((a: Battle, b: Battle) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.isSorted = !this.isSorted
    }
  }

  sortByName() {
    this.sortByKey('myHero')
  }

  sortByEnemyName() {
    this.sortByKey('enemyHero')
  }

  sortByWinner() {
    this.sortByKey('winner')
  }

  private sortByKey(key: string) {
    if (this.isSorted) {
      this.battles = [...this.storeService.userState[UserStateKeys.BattleHistory]].sort((a: Battle, b: Battle) => {
        if (a[key] < b[key]) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    } else {
      this.battles = [...this.storeService.userState[UserStateKeys.BattleHistory]].sort((a: Battle, b: Battle) => {
        if (b[key] < a[key]) return -1
        else return 1
      })
      this.isSorted = !this.isSorted
    }
  }
}
