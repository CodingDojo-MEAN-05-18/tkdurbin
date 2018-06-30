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
// import * as fromBooks from './books';

// import { BookService } from './services/book.service';
import * as fromServices from './services';
import * as fromBooks from './books';

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
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  // providers: [BookService],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
