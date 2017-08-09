import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotiflyService {
artistas: any[] = [];
urlBusqueda:string = "https://api.spotify.com/v1/search";
  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQASve6FUGLn3Pz2oTtBtPaYzFHxctbkf1sitLOF1BmAb7KO0JHtg5aF1EAZoYyItx-35Pc5nD9yvEZj3VpM2A');

    let query = `?q=${ termino }&type=artist`;
    let url   = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
      .map( res => {
        console.log( res.json().artists.items );
        this.artistas = res.json().artists.items;
        //return this.artistas;
      });

  }

}
