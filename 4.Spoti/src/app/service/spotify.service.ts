import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  constructor( private http:Http ) { }

  getArtistas( termino:string){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQCeDxYHF5ZrkdoOq_IAJx7rCikw9UIkOxZw9jJ59lWUE82CpZiJ4Iw90R8Nr1CG-mt2auoegS8-m3eaYSPKjg' );

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
        .map(res =>{
          //console.log( res.json().artists.items );
          this.artistas = res.json().artists.items;
          console.log(this.artistas);

          return this.artistas;
        })

  }

}
