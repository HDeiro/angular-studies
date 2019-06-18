import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

  book = {
    title: 'Harry Potter',
    author: 'j. k. rowling',
    pages: 332,
    rating: 4.5555555,
    price: 12000.32621,
    lauchDate: new Date()
  }

  bookList = [
    'Angular 2',
    'Go',
    'Java',
    'JavaScript'
  ];

  filterText = '';

  asynchronous = new Promise(resolve => setTimeout(_ => resolve('Asynchronous'), 2000));
  asynchronous2 = interval(3000).pipe(map(v => 'Asynchronous Value via RXJS'));

  constructor() {}

  ngOnInit() {
  }

  filterBooks() {
    if(!this.bookList)
      return this.bookList
    else
      return this.bookList.filter(text => 
        text.toLocaleLowerCase().indexOf(this.filterText) >= 0);
  }

}
