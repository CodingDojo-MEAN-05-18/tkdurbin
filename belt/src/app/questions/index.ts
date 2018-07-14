import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';

export const components: any[] = [
  QuestionDetailComponent,
  QuestionListComponent,
  QuestionNewComponent,
  QuestionAnswerComponent,
];

export * from './question-detail/question-detail.component';
export * from './question-list/question-list.component';
export * from './question-new/question-new.component';
export * from './question-answer/question-answer.component';
