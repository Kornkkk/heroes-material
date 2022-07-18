
import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/model/heroes';
import { HeroService } from 'app/sevices/hero.sevices';
import { Router } from 'express';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  heroes: Hero[] = [];
  url: string = '';

  constructor(private heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {


  //   this.url = this.router.url;
  //   if (this.url == '/heroes') {
  //     this.getHeroes();

  //   }
  //   else if (this.url == '/heroes-api') {
  //     this.getHeroesApi();
    

  //   }


  // }

  // getHeroes() {
  //   this.heroService.getHeroes().subscribe(h => this.heroes = h);
  // }
  // getHeroesApi() {
  //   this.heroService.getHeroesApi().subscribe(h => this.heroes = h);

  }

}
