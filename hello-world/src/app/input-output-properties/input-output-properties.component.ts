import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ioprop',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.scss']
})
export class InputOutputPropertiesComponent implements OnInit {

  @Input('inputId') inputPropertyValue:String = 'Clear';

  constructor() { }

  ngOnInit() {
  }

}
