import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  hero:any = {};
  constructor( private _actRouter:ActivatedRoute, private _serviceHeroes:HeroesService ) {
      this._actRouter.params.subscribe( _params =>{
        this.hero = this._serviceHeroes.getHeroe( _params.id );
        //console.log(this.hero);
      })
   }

  ngOnInit() {
  }

}
