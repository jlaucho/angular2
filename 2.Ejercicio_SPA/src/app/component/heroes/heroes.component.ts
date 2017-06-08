import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  constructor( private _serviceHeroes:HeroesService ) { }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
  }

}
