import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../question';

import { switchMap } from 'rxjs/operators';

import { QuestionService } from '../../services';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');

          console.log(id);

          return this.questionService.getQuestion(id);
        })
      )
      .subscribe(
        question => (this.question = question),
        error => {
          console.log('error', error);

          this.errorMessage = error.error;

          // setTimeout(() => {
            // this.router.navigateByUrl('/');
          // }, 3000);
      }
    );
  }

}
