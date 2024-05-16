import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Initialize any variables needed for the login
  username: string = '';
  password: string = '';

  // A simple method to simulate the login process
  login() {
    console.log('Login Attempted:', this.username, this.password);
    // Normally, here you would have logic to validate and process the login
    // Redirect to the dashboard
    window.location.href = '/dashboard';
  }
}
