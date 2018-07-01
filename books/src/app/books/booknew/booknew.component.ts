import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Book } from '../../book';
import { BookService } from '../../services';

@Component({
  selector: 'app-booknew',
  templateUrl: './booknew.component.html',
  styleUrls: ['./booknew.component.css'],
})
export class BooknewComponent implements OnInit, OnDestroy {
  book = new Book();
  sub: Subscription;

  @Output() newBook = new EventEmitter<Book>();

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.bookService.createBook(this.book).subscribe(book => {
      console.log('book from api', book);
      this.newBook.emit(book);
      this.book = new Book();
      form.reset();
    });

    // this.books.push(this.book);
    // this.newBook.emit(this.book);

    // console.log('books', this.books);
  }
}
