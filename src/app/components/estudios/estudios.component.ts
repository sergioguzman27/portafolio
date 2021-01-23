import { Component, OnInit } from '@angular/core';
import { DotLine } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {
  
  dotLines: Array<DotLine> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTimeline().subscribe( response => {
      this.dotLines = response;
    });
  }

}
