import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  constructor( private _serviceHeroes:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
  }

  private verHeroe(index:number) {
    this._router.navigate(['/heroe', index]);
  }

}
