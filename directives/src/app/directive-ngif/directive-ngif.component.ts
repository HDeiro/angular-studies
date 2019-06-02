import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.scss']
})
export class DirectiveNgifComponent implements OnInit {

  classes: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
