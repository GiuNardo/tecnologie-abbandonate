import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeslider',
  templateUrl: './timeslider.component.html',
  styleUrls: ['./timeslider.component.css']
})
export class TimesliderComponent {

  constructor() { }
  
  @Output() timed = new EventEmitter<number>();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2019;
  min = 1850;
  showTicks = false;
  step = 10;
  thumbLabel = true;
  value = 2010;
  vertical = false;

  onChange(yearInUse : number) {
    this.timed.emit(yearInUse);
    console.log(yearInUse);
  }


}
