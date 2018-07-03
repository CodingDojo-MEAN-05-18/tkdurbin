import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { BooklistComponent } from './books/booklist/booklist.component';
// import { BooknewComponent } from './books/booknew/booknew.component';
// import { BookdetailComponent } from './books/bookdetail/bookdetail.component';
import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';

// import { BookService } from './services/book.service';
import * as fromServices from './services';
import * as fromBooks from './books';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookResolve } from './resolvers';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    // BooklistComponent,
    // BooknewComponent,
    // BookdetailComponent,
    ...fromBooks.components,
    TitleizePipe,
    SearchPipe,
    NavComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  // providers: [BookService],
  providers: [...fromServices.services, BookResolve],
  bootstrap: [AppComponent],
})
export class AppModule {}
