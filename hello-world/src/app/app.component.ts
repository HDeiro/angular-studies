import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  initialValue:number = 5;
  destroyLifecycle:boolean = false;

  onValueChanged($event) {
    console.log($event);
  }

  changeValue() {
    this.initialValue++;
  }

  destroyLifecycleComponent() {
    this.destroyLifecycle = true;
  }
}
