import { Component } from '@angular/core';
import { Email } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = new Email();

  emails: Array<Email> = [
    {
      address: 'bill@gates.com',
      importance: false,
      subject: 'New Windows',
      content: 'WindowsXI will launch in year 2100'
    },
    {
      address: 'adda@lovelace.com',
      importance: true,
      subject: 'Programming',
      content: 'Enchantress of Numbers'
    },
    {
      address: 'john@carmac.com',
      importance: true,
      subject: 'Updated Algo',
      content: 'New algorithm for shadow volumes'
    },
    {
      address: 'gabe@newel.com',
      importance: false,
      subject: 'HL3!',
      content: 'Just kidding...'
    }
  ];
}
