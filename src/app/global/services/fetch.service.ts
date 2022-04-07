import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiUrl, Hero} from "../../shared/interfaces";

type Response = {
  response: string;
  results?: Hero[];
};

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  url: string = ApiUrl.apiUrl + ApiUrl.apiToken;

  constructor(private http: HttpClient) {
  }

  getHeroesByName(name: string): Observable<Hero[]> {
    return this.http.get<Response>(this.url + 'search/' + name).pipe(
      map((response: Response) => {
        if (response.response === 'error') {
          return [] as Hero[];
        }
        return response.results.map((hero: Hero) =>  this.setHeroPowerstats(hero)) as Hero[];
      })
    )
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.url + id).pipe(
      map((response: Hero) => this.setHeroPowerstats(response) as Hero)
    )
  }

  getRandomHero(): Observable<Hero> {
    return this.http.get<Hero>('https://superheroapi.com/api.php/2246724375469588/' + (Math.floor(Math.random()*(731-1))+1).toString()).pipe(
      map((response: Hero) => this.setHeroPowerstats(response) as Hero)
    )
  }

  setHeroPowerstats(hero: Hero): Hero {
    const powerstats = {...hero.powerstats}
    for (let key in powerstats) {
      if(powerstats[key] === 'null') {
        powerstats[key] = '0'
      }
    }
    return {...hero, powerstats}
  }
}
