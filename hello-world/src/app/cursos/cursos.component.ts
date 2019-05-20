import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal:string;
  cursos:string[] = ['JavaScript', 'Angular', 'SASS'];

  constructor() {
    this.nomePortal = "https://hugodeiro.com";
  }

  ngOnInit() {
  }

}
