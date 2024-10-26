import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLoginSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      // Redirect to home or dashboard upon successful login
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}
