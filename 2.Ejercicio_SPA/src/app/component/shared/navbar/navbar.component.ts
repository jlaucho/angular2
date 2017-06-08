import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router) {
  }
  buscarHeroe(texto:string){
    //buscarHeroes(texto);
    window.console.log(`Hola: ${texto}`);
    this._router.navigate(['buscar', texto]);
  }
  ngOnInit() {
  }
}
