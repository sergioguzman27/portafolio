import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';
  faCoffee = faCoffee;
  activeSeccion = 2;
  
  changeSeccion = (id) => {
    this.activeSeccion = id;
    console.log('activeSeccion ', this.activeSeccion);
  }
}
