import { Component, OnInit } from '@angular/core';
import { SpotiflyService } from '../../sevices/spotifly.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  termino:string = "";
  constructor( private _spotiflyService:SpotiflyService ) { }

  ngOnInit() {}

  buscarArtista(){
    this._spotiflyService.getArtistas(this.termino)
    .subscribe(  );

  }

}
