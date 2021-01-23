import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
