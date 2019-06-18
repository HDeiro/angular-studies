import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

  book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 332,
    rating: 4.5555555,
    price: 12.32621,
    lauchDate: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
