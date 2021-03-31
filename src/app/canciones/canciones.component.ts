import { Component, OnInit } from '@angular/core';
import {Cancion} from '../cancion';
import {CancionesService} from '../canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  title : string = "Canciones";
  cancionNueva : Cancion;
  canciones: Cancion[] = [];

  constructor(private servicioCanciones: CancionesService) {
    this.cancionNueva = new Cancion(
      '','','',
      2019,'','');
  }

  ngOnInit() {
    this.canciones.push(new Cancion('cancion 1',
    'artista 1','album 1',2019,'Honduras',''));
    this.canciones.push(new Cancion('cancion 2',
    'artista 2','album 2',2019,'Honduras',''));
    this.canciones.push(new Cancion('cancion 3',
    'artista 3','album 3',2019,'Honduras',''));
    this.canciones.push(new Cancion('cancion 4',
    'artista 4','album 4',2019,'Honduras',''));
    console.log(this.canciones);

    this.servicioCanciones.getCanciones().subscribe(
      (data:Cancion[]) => {
          this.canciones = data;
      },
      (error) => {
          console.log('error conectando con api');
      }
    );
  }

  guardar (){
    this.servicioCanciones.postCancion(this.cancionNueva).subscribe(
      (res) => {
        this.canciones.unshift(this.cancionNueva);
        this.cancionNueva = new Cancion(
          '','','',
          2019,'','');
        window.alert('Se agregó exitosamente');
      },
      (error) => {
          window.alert('Error al agregar');
      }
  );
  }
}
