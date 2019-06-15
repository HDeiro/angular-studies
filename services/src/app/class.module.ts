import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassService } from './classes/classes.services';
import { ClassesComponent } from './classes/classes.component';
import { CreateClassComponent } from './create-class/create-class.component';

@NgModule({
  declarations: [
    CreateClassComponent,
    ClassesComponent
  ],
  exports: [
    CreateClassComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassModule { }
