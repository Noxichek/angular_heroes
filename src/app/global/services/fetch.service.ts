import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {Hero} from "../../shared/interfaces";

type Response = {
  response: string;
  results?: Hero[];
};

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  url: string = environment.apiUrl + environment.apiToken;

  constructor(private http: HttpClient) {
  }

  getHeroesByName(name: string): Observable<Hero[]> {
    return this.http.get<Response>(this.url + 'search/' + name).pipe(
      map((response: Response) => {
        if (response.response === 'error') {
          return [] as Hero[];
        }
        return response.results as Hero[];
      })
    )
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.url + id)
  }

  getRandomHero(): Observable<Hero> {
    return this.http.get<Hero>('https://superheroapi.com/api.php/2246724375469588/' + (Math.floor(Math.random()*(731-1))+1).toString())
  }

}
