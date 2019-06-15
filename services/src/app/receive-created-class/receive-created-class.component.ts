import { Component, OnInit } from '@angular/core';
import { ClassService } from '../classes/classes.services';

@Component({
  selector: 'app-receive-created-class',
  templateUrl: './receive-created-class.component.html',
  styleUrls: ['./receive-created-class.component.scss']
})
export class ReceiveCreatedClassComponent implements OnInit {

  clazz: string;

  constructor(private _classService: ClassService) { }

  ngOnInit() {
    this._classService.emitterClassCreated.subscribe(clazz => {
      this.clazz = clazz;
    });
  }

}
