import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/bookdata';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [TitleizePipe],
})
export class BooklistComponent implements OnInit {
  selectedBook: Book;
  books: Array<Book> = BOOKS;

  constructor(private titleize: TitleizePipe) {}

  ngOnInit() {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

  onSelect(book: Book): void {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;
    /*
    if (this.selectedBook === book) {
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    }*/
  }
  onCreate(event: Book) {
    console.log('creating book', event);
    this.books.push(event);
  }
}
