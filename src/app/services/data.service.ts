import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto, DotLine } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get<Proyecto[]>('/assets/proyectos.json');
  }

  getTimeline() {
    return this.http.get<DotLine[]>('/assets/timeline.json');
  }
}
