import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../question';
import { Answer } from '../answer';


@Injectable()
export class AnswerService {
  private base = '/api/questions';

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.base);
  }

  getAnswer(id: string): Observable<Answer> {
    return this.http.get<Answer>(`${this.base}/${id}`);
  }
  createAnswer(answer: Answer): Observable < Answer > {
    return this.http.post<Answer>(this.base, answer);
 }
}
