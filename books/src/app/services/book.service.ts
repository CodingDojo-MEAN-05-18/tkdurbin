import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable/of';
// import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { BOOKS } from '../data/bookdata';
import { Book } from '../book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private base = 'http://5948bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
    // return this.http.get(this.base) as Observable<Book[]>;
    // return of(BOOKS);
  }
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${book._id}`);
  }
}
