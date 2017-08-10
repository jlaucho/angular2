import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotiflyService {
artistas: any[] = [];
urlBusqueda:string = "https://api.spotify.com/v1/search";
urlArtista:string  = "https://api.spotify.com/v1/artists/";
//urlTop:string      = "https://api.spotify.com/v1/artists/";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDfjmFQgRroLHVhguaVzzS8Hl_kzrSAgFORau5qB8KNZGa6k5nWMatkziXtOwJCV9r7YhMobNa2ploJ4GJYvA');

    let query = `?q=${ termino }&type=artist`;
    let url   = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
      .map( res => {
        //console.log( res.json().artists.items );
        this.artistas = res.json().artists.items;
        //return this.artistas;
      });

  }
  getArtista( id:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDfjmFQgRroLHVhguaVzzS8Hl_kzrSAgFORau5qB8KNZGa6k5nWMatkziXtOwJCV9r7YhMobNa2ploJ4GJYvA');

    let query = `${ id }`;
    let url   = this.urlArtista + query;

    return this.http.get( url, { headers } )
      .map( res => {
        console.log( res.json());
        return res.json();
      });

  }
  getTop( id:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDfjmFQgRroLHVhguaVzzS8Hl_kzrSAgFORau5qB8KNZGa6k5nWMatkziXtOwJCV9r7YhMobNa2ploJ4GJYvA');

    let query = `${ id }/top-tracks?country=US`;
    let url   = this.urlArtista + query;

    return this.http.get( url, { headers } )
      .map( res => {
        console.log( res.json().tracks );
        return res.json().tracks;
      });

  }

}
