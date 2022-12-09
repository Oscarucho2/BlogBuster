import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/service/musicDataBase';
import {Route} from '@angular/router';
import {musicService} from 'src/service/musicService';

@Component({
  selector: 'app-anime',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  musicList = null;
  databaseList: any[]=[];
  constructor(private databaseSvc:DatabaseService, private service:musicService) { 
    this.databaseSvc.getAll().subscribe((result:any)=>{
      this.databaseList = result;
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos()
  {
    this.service.mostrarTodos().subscribe((result:any)=>this.musicList=result);
    console.log(this.musicList);
  }
  
  Eliminar(id_cancion:any):void{
    console.log(id_cancion)
    if(window.confirm("¿Estas seguro de querer eliminar?")){
      this.service.eliminar(id_cancion).subscribe(() => {
        this.mostrarTodos();
      },(error) => {
        console.error(error);
    })
   }
  }

}
