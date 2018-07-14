import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
// import { BOOKS } from '../data/book-data';
import { Question } from '../question';

@Injectable()
export class QuestionService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/questions';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.base);
  }

  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.base}/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.base, question);
  }

  deleteQuestion(question: Question): Observable<Question> {
    return this.http.delete<Question>(`${this.base}/${question._id}`);
  }
}
