import { Component, OnInit } from '@angular/core';

import { ClassService } from './classes.services';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  providers: [ClassService]
})
export class ClassesComponent implements OnInit {

  classes: string[] = [];

  constructor(private _classService: ClassService) {
  }

  ngOnInit() {
    this.classes = this._classService.getClasses();
  }
}
