import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import{HomeComponent} from '../../app/Componentes/Pages/Inicio/home/home.component';
import{AboutComponent} from '../../app/Componentes/Pages/About/about/about.component';
import{ImagesComponent} from '../../app/Componentes/Pages/Images/images/images.component';
import{ContactoComponent} from '../../app/Componentes/Pages/Contacto/contacto/contacto.component';
import{AnimeComponent} from '../../app/Componentes/Pages/anime/anime.component';
import { MusicaComponent } from 'src/app/Componentes/Pages/musica/musica.component';
import { VideojuegosComponent } from 'src/app/Componentes/Pages/videojuegos/videojuegos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
    {path: 'Inicio', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'images', component:ImagesComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'anime', component:AnimeComponent},
    {path: 'musica', component:MusicaComponent},
    {path: 'videojuegos', component:VideojuegosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,
        relativeLinkResolution:'legacy'}), ],
   exports:[RouterModule]
})
export class AppRoutingModule { }