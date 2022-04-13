import {Component, Input} from '@angular/core';
import {Hero} from "../shared/interfaces";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  @Input() heroes: Array<Hero> = [];

}
