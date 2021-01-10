import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  java = 0;
  python = 0;
  javascript = 0;
  sql = 0;
  angular = 0;
  ionic = 0;
  react = 0;
  django = 0;

  constructor() { }

  async ngOnInit() {
    setTimeout(() => {
      this.java = 55;
      this.python = 70;
      this.javascript = 65;
      this.sql = 45;
      this.angular = 50;
      this.ionic = 50;
      this.react = 75;
      this.django = 80;
    }, 1000);
  }
}
