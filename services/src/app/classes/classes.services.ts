import { Injectable } from '@angular/core';

@Injectable()
export class ClassService {
  getClasses() {
    return [
      'Angular',
      'AngularJS',
      'React',
      'Vue'
    ];
  }
}
