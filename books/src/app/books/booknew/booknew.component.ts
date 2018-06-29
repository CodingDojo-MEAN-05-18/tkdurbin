import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';

@Component({
  selector: 'app-booknew',
  templateUrl: './booknew.component.html',
  styleUrls: ['./booknew.component.css'],
})
export class BooknewComponent implements OnInit {
  book = new Book();
  @Output() newBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    // this.books.push(this.book);
    this.newBook.emit(this.book);

    this.book = new Book();

    form.reset();

    // console.log('books', this.books);
  }
}
