import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CookieModule } from 'ngx-cookie';


import * as fromQuestions from './questions';
import * as fromServices from './services';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuestionAnswerComponent } from './questions/question-detail/question-answer/question-answer.component';
import { LandingComponent } from './home/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromQuestions.components,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    NotFoundComponent,
    QuestionAnswerComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
