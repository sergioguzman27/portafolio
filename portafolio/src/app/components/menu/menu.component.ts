
import { Component, OnInit } from '@angular/core';
import { faBars  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
