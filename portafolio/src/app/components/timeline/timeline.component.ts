import { Component, Input, OnInit } from '@angular/core';
import { DotLine } from '../../interfaces/interfaces';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() dotLines: Array<DotLine> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getClassInfo(dot: DotLine) {
    return `timeline-dot-info animate__animated animate__fadeInUp animate__delay-1s ${dot.id % 2 == 0 ? 'down' : ''}`;
  }

}
