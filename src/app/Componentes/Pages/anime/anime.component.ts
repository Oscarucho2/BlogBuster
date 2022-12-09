import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/service/database.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  databaseList: any[]=[];
  constructor(private databaseSvc:DatabaseService) { 
    this.databaseSvc.getAll().subscribe((result:any)=>{
      this.databaseList = result;
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}
