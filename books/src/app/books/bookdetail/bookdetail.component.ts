import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../book';
import { BookService } from '../../services';
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
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    /* this.route.paramMap.subscribe(params =>{
        const id = params.get('id');
        console.log(params.get('id'));
        this.bookService.getBook(id)
          .subscribe(book => this.book = book);
    });

    this.route.paramMap
      .switchMap(params => this.bookService.getBook(params.get('bookID')))
      .subscribe(
        book => {
          console.log('got book', book);
          this.book = book;
          console.log('the book', this.book);
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
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');
          console.log(id);
          return this.bookService.getBook(id);
        })
      )
      // this.bookService.getBook(params.get('id'))))
      .subscribe(
        book => (this.book = book),
        error => {
          console.log('error', error);
          this.errorMessage = error.error;

          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3000);
        }
      );
    this.book = this.route.snapshot.data.book;
  }
}
