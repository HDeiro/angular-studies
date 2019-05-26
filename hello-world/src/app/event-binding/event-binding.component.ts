import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  currentValue:String;
  savedValue:String;
  isMouseOver:Boolean;

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  buttonHasBeenClicked() {
    alert("clicked")
  }

  keyHasBeenClicked($event:KeyboardEvent) {
    this.currentValue = (<HTMLInputElement> $event.target).value;
  }

  enterHasBeenClicked(value) {
    alert('Enter has been clicked')
    this.savedValue = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
