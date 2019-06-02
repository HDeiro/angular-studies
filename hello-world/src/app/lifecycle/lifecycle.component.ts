import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterContentChecked, AfterViewChecked, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() initialValue:number = 10;

  constructor() { }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
