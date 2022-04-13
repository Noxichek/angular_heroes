import {Component, EventEmitter, Output} from '@angular/core';
import {StoreService} from "../../global/services/store.service";

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css']
})
export class RecentSearchesComponent {
  @Output() readonly value = new EventEmitter();

  constructor(public storeService: StoreService) {

  }

  filterSearch() {
    const arr = this.storeService.userState.recentSearch
    const newArr = arr.map(el => el.trim())
    return Array.from(new Set(newArr))
  }

  addToSearch(el: HTMLButtonElement) {
    this.value.emit(el.innerText)
  }
}
