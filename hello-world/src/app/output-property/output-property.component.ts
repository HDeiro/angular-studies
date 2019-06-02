import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'outprop-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

  @Input('counterValue') counterValue:number;
  @Output() eventEmitterValueHasChanged = new EventEmitter();
  @ViewChild('inputElement') inputElement:ElementRef;

  change(value:number) {
    this.inputElement.nativeElement.value = parseInt(this.inputElement.nativeElement.value) + value;
    this.eventEmitterValueHasChanged.emit({
      "success": true,
      "type": value < 0 ? 'decrement' : 'increment',
      "currentValue": this.inputElement.nativeElement.value
    });
  }

  constructor() { }
}
