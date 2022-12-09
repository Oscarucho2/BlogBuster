import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const URL = 'assets/data/musicDataBase.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient ) { }
 
  getAll(){
    return this.http.get(URL)
  }
}