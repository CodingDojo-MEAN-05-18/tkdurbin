import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { QuestionService } from '../../services';
import { Question } from '../../question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  question = new Question();
  sub: Subscription;

  @Output() newQuestion = new EventEmitter<Question>();

  constructor(
    private readonly questionService: QuestionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  OnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.question);

    this.sub = this.questionService.createQuestion(this.question).subscribe(question => {
      console.log('question from api', question);

      this.router.navigateByUrl('/questions');
    });
  }
}
