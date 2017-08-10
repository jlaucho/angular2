import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Importacion de servicios

import { SpotiflyService } from './sevices/spotifly.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinFotoPipe,
    ArtistaComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotiflyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
