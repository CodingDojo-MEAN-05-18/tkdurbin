import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../question';
import { Answer } from '../answer';


@Injectable()
export class QuestionService {
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
