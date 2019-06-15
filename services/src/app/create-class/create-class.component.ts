import { Component, OnInit } from '@angular/core';
import { ClassService } from '../classes/classes.services';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss'],
  providers: [ClassService]
})
export class CreateClassComponent implements OnInit {

  classes: string[] = [];

  constructor(private _classService: ClassService) {
    this.classes = this._classService.getClasses();
  }

  onAddClass(clazz:string) {
    this._classService.addClass(clazz);
  }

  ngOnInit() {
  }

}
