import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(private router: Router) {}

  get usernameValue() {
    return this.username();
  }
  set usernameValue(val: string) {
    this.username.set(val);
  }

  get passwordValue() {
    return this.password();
  }
  set passwordValue(val: string) {
    this.password.set(val);
  }

  login() {
    if (this.username() === 'admin' && this.password() === 'admin') {
      this.errorMessage.set('');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage.set('Invalid username or password');
    }
  }
}
