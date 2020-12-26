import { Component, OnInit, ViewChild } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/interfaces/interfaces';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  itemSelect = 0;
  proyectos: Array<Proyecto> = [];

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe( response => {
      this.proyectos = response;
    });
  }

  movePrevius() {
    if (this.itemSelect - 1 < 0) {
      this.itemSelect = this.proyectos.length - 1;
    } else {
      this.itemSelect -= 1;
    }
  }

  moveNext() {
    if (this.itemSelect + 1 == this.proyectos.length) {
      this.itemSelect = 0;
    } else {
      this.itemSelect += 1;
    }
  }
}
