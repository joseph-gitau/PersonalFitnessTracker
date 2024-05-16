import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    // check if user is already logged in and redirect to dashboard
    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            window.location.href = '/dashboard';
        }
    }

    constructor(private authService: AuthService) {}

    login() {
        // check empty username and password
        if (!this.username || !this.password) {
            this.errorMessage = 'Username and password are required';
            return;
        }
        if (this.authService.login(this.username, this.password)) {
            console.log('Login successful:', this.username);
            window.location.href = '/dashboard';
        } else {
            this.errorMessage = 'Invalid username or password';
        }
    }
}
