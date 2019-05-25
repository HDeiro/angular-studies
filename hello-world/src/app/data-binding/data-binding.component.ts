import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url:string = "https://hugodeiro.com";
  urlImagem:String = "http://lorempixel.com/300/200/cats/";
  getValor() {
    return 33;
  }

  constructor() { }

  ngOnInit() {
  }

}
