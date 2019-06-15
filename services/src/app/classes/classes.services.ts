import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../log.service';

@Injectable()
export class ClassService {

  static staticEmitterClassCreated = new EventEmitter<string>();
  emitterClassCreated = new EventEmitter<string>();

  private classes = [
    'Angular',
    'AngularJS',
    'React',
    'Vue'
  ];

  constructor(private logger: LogService) {
  }

  getClasses() {
    this.logger.info('Returning list of classes');
    return this.classes;
  }

  addClass(clazz: string) {
    this.logger.info(`Adding class ${clazz}`);
    this.classes.push(clazz);
    this.emitterClassCreated.emit(clazz);
    ClassService.staticEmitterClassCreated.emit(clazz);
  }
}
