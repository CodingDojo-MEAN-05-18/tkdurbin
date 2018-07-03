import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../book';
import { BookService } from '../../services/book.service';
// import 'rxjs/add/operator/switchMap';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],
})
export class BookdetailComponent implements OnInit {
  @Input() book: Book;
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* this.route.paramMap
      .switchMap(params => this.bookService.getBook(params.get('bookID')))
      .subscribe(
        book => {
          console.log('got book', book);
          this.book = book;
        },
        error => {
          console.log('got an error');
          console.log(error);
          this.errorMessage = error.statusText;
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
        }
      );*/
    this.book = this.route.snapshot.data.book;
  }
}
