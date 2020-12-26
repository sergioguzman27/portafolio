import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get<Proyecto[]>('/assets/proyectos.json');
  }
}
