import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassService } from './classes/classes.services';
import { ClassesComponent } from './classes/classes.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ReceiveCreatedClassComponent } from './receive-created-class/receive-created-class.component';

@NgModule({
  declarations: [
    CreateClassComponent,
    ClassesComponent,
    ReceiveCreatedClassComponent
  ],
  exports: [
    CreateClassComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule
  ]
  //,providers: [ClassService]
})
export class ClassModule { }
