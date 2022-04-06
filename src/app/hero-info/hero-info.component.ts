import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../shared/interfaces";
import {FetchService} from "../global/services/fetch.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit {
  hero!: Hero;

  constructor(private route: ActivatedRoute,
              private  fetchService: FetchService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      console.log(params)
      this.fetchService.getHeroById(params['id'])
        .subscribe(response => this.hero = response)

    })
  }

}
