import { Component, OnInit } from '@angular/core';

import { ClassService } from './classes.services';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classService: ClassService;
  classes: string[] = [];

  constructor() {
    this.classService = new ClassService();
  }

  ngOnInit() {
    this.classes = this.classService.getClasses();
  }
}
