import { Injectable } from '@angular/core';

@Injectable()
export class ClassService {

  private classes = [
    'Angular',
    'AngularJS',
    'React',
    'Vue'
  ];

  constructor() {
    console.log('Criou ClassService');
  }

  getClasses() {
    return this.classes;
  }

  addClass(clazz:string) {
    this.classes.push(clazz);
  }
}
