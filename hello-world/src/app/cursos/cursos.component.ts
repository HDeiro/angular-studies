import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal:string;
  cursos:string[];
  
  constructor(private cursosService:CursosService) {
    this.nomePortal = "https://hugodeiro.com";
    this.cursos = this.cursosService.getCursos();     
  }

  ngOnInit() {
  }

}
