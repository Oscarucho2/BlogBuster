import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private http: HttpClient ) { }
  url = 'http://localhost/Ejercicio2/Conexion/';
    mostrarTodos()
    {
      console.log("Recibido");
        return this.http.get(`${this.url}getall.php`);
    }

    agregar(UserEmail:string)
    {
      return this.http.post(`${this.url}post.php`, JSON.stringify(UserEmail));
    }
}