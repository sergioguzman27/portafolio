
import { Component, Input, OnInit } from '@angular/core';
import { faBars  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faBars = faBars;
  menu: boolean = false;
  @Input() changeSeccion: Function;
  @Input() activeSeccion;

  secciones: Array<any> = [
    {
      id: 1,
      titulo: 'Inicio'
    },
    {
      id: 2,
      titulo: 'Proyectos'
    },
    {
      id: 3,
      titulo: 'Servicios'
    },
    {
      id: 4,
      titulo: 'Conocimientos'
    },
    {
      id: 5,
      titulo: 'Estudios'
    },
    {
      id: 6,
      titulo: 'Contacto'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('activeSeccion ', this.activeSeccion);
  }

  cambiarSeccion(id): void {
    this.changeSeccion(id);
  }

  toogleMenu() {
    this.menu = !this.menu;
  }

}
