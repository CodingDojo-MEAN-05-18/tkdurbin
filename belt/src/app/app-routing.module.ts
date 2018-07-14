import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromQuestions from './questions';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { LandingComponent } from './home/landing/landing.component';

// import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'questions',
        component: fromQuestions.QuestionListComponent,
      },
      {
        path: 'new',
        component: fromQuestions.QuestionNewComponent,
        // canActivate: [fromGuards.AuthGuard],
      },
      {
        path: ':id',
        component: fromQuestions.QuestionDetailComponent,
      },
      {
        path: 'answer/new/:id',
        component: fromQuestions.QuestionAnswerComponent,
      },
      {
        path: 'answer/:id',
        component: fromQuestions.QuestionAnswerComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
