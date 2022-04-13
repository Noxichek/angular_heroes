import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../shared/interfaces";
import {FetchService} from "../global/services/fetch.service";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, Subscription} from "rxjs";

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit, OnDestroy {
  hero!: Hero;
  heroSub: Subscription

  constructor(private route: ActivatedRoute,
              private fetchService: FetchService
  ) {
  }

  ngOnInit(): void {
    this.heroSub = this.route.params.pipe(
      mergeMap(params => {
        return this.fetchService.getHeroById(params['id']);
      })
    ).subscribe(response => this.hero = response);
  }

  ngOnDestroy(): void {
    this.heroSub.unsubscribe()
  }
}
