import { Component,  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  errors: string[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit(user: User): void {
    this.auth.login(user).subscribe(() => this.router.navigateByUrl('questions'));
  }

  private handleErrors(errors: string[] | Error): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
