import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { HeroesService }      from './../../service/heroes.service';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  palabra:string;
  heroes:any[] = [];
  constructor( private _activRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this._activRoute.params.subscribe( params=>{
      this.palabra = params.texto;
      this.heroes = this._heroeService.buscarHeroes( params.texto );
      console.log(this.heroes);
    })
  }
  private verHeroe(index:number) {
    this._router.navigate(['/heroe', index]);
  }

}
