
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../model/heroes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HEROES } from 'assets/data/mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl: string = 'https://0d15-2405-9800-ba03-260-15f4-9abe-b24f-96b.ngrok.io/api/hero'; 
  constructor(private http: HttpClient) {}
  
  

  getHeroes(): Observable<Hero[]> {  
    return of (HEROES); 
  }

   getHero(id: number): Observable<Hero>{
   const hero = HEROES.find(h => h.id ==id)!;
   return of(hero); 
   }

   getHeroesApi(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
   }

}
