import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'app/model/heroes';
import { HeroService } from 'app/sevices/hero.sevices';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero?: Hero;
  hero?:Hero;
  constructor(private route: ActivatedRoute,
    private heroservices: HeroService,
    private location: Location)
     { }

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroservices.getHero(id).subscribe(h => this.hero = h)

  }
  

  goBack(){
    this.location.back();
 }
}
