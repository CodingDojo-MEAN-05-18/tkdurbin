import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from '../../book';
// import { BOOKS } from '../../data/bookdata';
import { BookService, AuthService } from '../../services';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [TitleizePipe],
})
export class BooklistComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];
  // filter: Book = new Book(false);
  sub: Subscription;
  authed: boolean;
  selectedBook: Book;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.sub = this.bookService.getBooks().subscribe(books => {
      this.books = books;
      // this.books = this.bookService.getBooks();
      this.books.forEach(book => {
        book.author = this.titleize.transform(book.author);
      });
    });
    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
  onCreate(book: Book) {
    console.log('creating book', event);
    this.books.push(book);
  }

  // clearFilter(): void {
  // this.filter = new Book(false);
  // }
  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
  }
  onDelete(bookToDelete: Book) {
    console.log('deleting book');
    this.bookService.deleteBook(bookToDelete).subscribe(deletedBook => {
      console.log('deleted', deletedBook);

      this.books = this.books.filter(book => book._id !== deletedBook._id);
    });
  }
}
