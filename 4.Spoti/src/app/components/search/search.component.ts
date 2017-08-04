import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private _spotify:SpotifyService ) { }

  ngOnInit() {
    this._spotify.getArtistas( "metallica" )
        .subscribe();
  }

}
