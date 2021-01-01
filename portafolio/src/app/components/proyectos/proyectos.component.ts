import { Component, OnInit } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  itemSelect = 0;
  proyectos: Array<Proyecto> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProyectos().subscribe( response => {
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
