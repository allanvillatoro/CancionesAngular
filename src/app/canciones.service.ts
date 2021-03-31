import { Injectable } from '@angular/core';
import {Cancion} from './cancion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  private connectionString;

  constructor(private http: HttpClient) {
    this.connectionString = 'http://localhost:3000/api/canciones';
  }

  getCanciones(){
    return this.http.get(this.connectionString);
  }

  postCancion(cancion: Cancion){
    return this.http.post(this.connectionString,cancion);
  }
  
}
