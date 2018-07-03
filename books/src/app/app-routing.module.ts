import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromBooks from './books';
import { BooklistComponent } from './books/booklist/booklist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookResolve } from './resolvers/index';
// import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
    // component: fromBooks.BooklistComponent,
  },
  {
    path: 'books',
    // component: fromBooks.BooklistComponent,
    children: [
      {
        path: '',
        component: fromBooks.BooklistComponent,
      },
      // path: 'books/new',
      {
        path: 'new',
        component: fromBooks.BooknewComponent,
      },
      {
        // path: 'books/:bookID',
        path: ':bookID',
        component: fromBooks.BookdetailComponent,
        resolve: {
          book: BookResolve,
        },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
