import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable/of';
// import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { BOOKS } from '../data/bookdata';
import { Book } from '../book';
import { ENGINE_METHOD_DIGESTS } from 'constants';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private base = 'http://5948bce6d49df00aaa02cfc.mockapi.io/books';

  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
    // return this.http.get(this.base) as Observable<Book[]>;
    // return of(BOOKS);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${book.id}`);
  }
}
