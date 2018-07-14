import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Question } from '../../../question';
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  answers: Array<Answer> = [];
  sub: Subscription;
  authed: boolean;

  selectedAnswer: Answer;

  constructor(private answerService: AnswerService,) { }

  ngOnInit() {
    this.sub = this.answerService.getQuestions().subscribe(questions => {
      this.answers = answers;
      this.answers.forEach(answer => {
        // answer.author = this.titleize.transform(answer.author);
      });
    });
  }
  onCreate(answer: Answer) {
    console.log('creating answer', answer);
    this.answers.push(answer);
  }
}
