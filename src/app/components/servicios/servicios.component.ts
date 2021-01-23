import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faMobileAlt, faCreditCard, faFileCode  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  faLaptopCode = faLaptopCode;
  faMobileAlt = faMobileAlt;
  faCreditCard = faCreditCard;
  faFileCode = faFileCode;

  constructor() { }

  ngOnInit(): void {
  }

}
