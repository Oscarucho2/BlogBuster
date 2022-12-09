import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class musicService {
  constructor(private http: HttpClient ) { }
  url = 'http://localhost/Ejercicio2/Conexion/';
    mostrarTodos()
    {
      console.log("Recibido");
        return this.http.get(`${this.url}musicGet.php`);
    }

    eliminar(id_cancion:any)
    {
      console.log(id_cancion);
      return this.http.delete(`${this.url}delete.php/id_cancion=${id_cancion}`);
    }
}