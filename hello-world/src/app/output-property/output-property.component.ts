import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'outprop-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input('counterValue') counterValue:number;
  @Output() eventEmitterValueHasChanged = new EventEmitter();

  change(value:number) {
    this.counterValue = this.counterValue + value;
    this.eventEmitterValueHasChanged.emit({
      "success": true,
      "type": value < 0 ? 'decrement' : 'increment',
      "currentValue": this.counterValue
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
