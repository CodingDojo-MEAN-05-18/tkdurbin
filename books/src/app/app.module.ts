import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BooknewComponent } from './books/booknew/booknew.component';
import { BookdetailComponent } from './books/bookdetail/bookdetail.component';
import { TitleizePipe } from './titleize.pipe';

TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BooknewComponent,
    BookdetailComponent,
    TitleizePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
