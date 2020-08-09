import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/app.model';
import  {HEROES} from '../mock/mock-hero'
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
 
  heroes: Hero[];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(nameHero: string) {
    nameHero = nameHero.trim();
    if(!nameHero) {return;}
    this.heroService.addHero({name: nameHero} as Hero).subscribe((hero) => this.heroes.push(hero));
  }

}
