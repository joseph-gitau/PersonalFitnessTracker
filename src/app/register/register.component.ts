import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    // Method to handle form submission and user registration
    register() {
        // Check empty username and password
        if (!this.username || !this.password) {
            this.errorMessage = 'Username and password are required';
            return;
        }
        // Call AuthService method to register user
        if (this.authService.register(this.username, this.password)) {
            // If registration successful, redirect to dashboard
            this.router.navigate(['/login']);
        } else {
            // If registration fails, display error message
            this.errorMessage = 'Registration failed. Please try again. Username may already exist.';
        }
    }
}
