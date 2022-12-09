import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/NAVBAR/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../assets/Rutas/app.routes';
import { HomeComponent } from './Componentes/Pages/Inicio/home/home.component';
import { AboutComponent } from './Componentes/Pages/About/about/about.component';
import { ContactoComponent } from './Componentes/Pages/Contacto/contacto/contacto.component';
import { ImagesComponent } from './Componentes/Pages/Images/images/images.component';
import { FooterComponent } from './Componentes/FOOTER/footer/footer.component';
import { AnimeComponent } from './Componentes/Pages/anime/anime.component';
import { MusicaComponent } from './Componentes/Pages/musica/musica.component';
import { VideojuegosComponent } from './Componentes/Pages/videojuegos/videojuegos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactoComponent,
    ImagesComponent,
    FooterComponent,
    AnimeComponent,
    MusicaComponent,
    VideojuegosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
