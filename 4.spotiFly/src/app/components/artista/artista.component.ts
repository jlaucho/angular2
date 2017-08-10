import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiflyService } from '../../sevices/spotifly.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista :any;
  pistas  :any[];

  constructor( private activatedRoute: ActivatedRoute,
               private _spotiflyService: SpotiflyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( parametros => parametros['id'] )
      .subscribe( id => {
        window.console.log( id );
        this._spotiflyService.getArtista( id )
            .subscribe( data => this.artista = data );

        this._spotiflyService.getTop( id )
            .subscribe( data => this.pistas = data );
      })
  }

}
