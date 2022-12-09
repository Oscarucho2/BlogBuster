import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/service/videoGamesDataBase';
//import {game} from 'src/app/modelos/games';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  videoGames = null;
  videoGameForm = new FormGroup({
    UserEmail: new FormControl(''),
  });
  
  constructor(private SVC:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos()
  {
    this.SVC.mostrarTodos().subscribe((result:any)=>this.videoGames=result);
    console.log(this.videoGames);
  }

  Agregar():void{
    this.SVC.agregar(this.videoGameForm.value).subscribe(() => {
      this.mostrarTodos();
      this.videoGameForm.reset('');
    })
    console.log(this.videoGameForm.value);
  }
}