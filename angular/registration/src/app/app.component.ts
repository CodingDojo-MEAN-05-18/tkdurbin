import { Component } from '@angular/core';
import { User } from './user';
import { States } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  states = States;
  user = new User();
  // title = 'Registration App';
  newUser: Object;

  onSubmit() {
    console.log('form Submitted');
    this.newUser = this.user;
    this.user = new User();
  }
}
