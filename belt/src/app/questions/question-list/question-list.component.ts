import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from '../../question';

import { QuestionService, AuthService } from '../../services';

import { User } from '../../user';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnDestroy {
  questions: Array<Question> = [];
  sub: Subscription;
  authed: boolean;

  selectedQuestion: Question;

  constructor(
    private questionService: QuestionService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      this.questions.forEach(question => {
        // question.author = this.titleize.transform(question.author);
      });
    });

    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(question: Question) {
    console.log('selecting question', question);

    this.selectedQuestion = this.selectedQuestion === question ? null : question;

    // if (this.selectedquestion !== question) {
    //   this.selectedquestion = question;
    // } else {
    //   this.selectedquestion = null;
    // }
  }

  onCreate(question: Question) {
    console.log('creating question', question);
    this.questions.push(question);
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
  }

  onDelete(questionToDelete: Question) {
    console.log('deleting question');
    this.questionService.deleteQuestion(questionToDelete).subscribe(deletedQuestion => {
      console.log('deleted question', deletedQuestion);

      this.questions = this.questions.filter(question => question._id !== deletedQuestion._id);
    });

  }

}
