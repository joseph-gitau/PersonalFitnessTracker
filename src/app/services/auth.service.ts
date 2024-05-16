import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private dataUrl = 'assets/data.json';
    private users: any[] = []; // Initialize users array

    constructor(private http: HttpClient, private router: Router) {
        // Fetch user data when AuthService is instantiated
        this.getUsers().subscribe((data) => {
            this.users = data.users;
        });
    }

    // Method to fetch user data from the JSON file
    private getUsers(): Observable<any> {
        return this.http.get<any>(this.dataUrl);
    }

    // Method to perform login
    login(username: string, password: string): boolean {
        const user = this.users.find(
            (u) => u.username === username && u.password === password
        );
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            return true;
        } else {
            return false;
        }
    }

    // Method to perform logout
    logout(): void {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
    }

    // Method to check login status
    isLoggedIn(): boolean {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    // Method to get the logged in user
    getLoggedInUser(): string | null {
        return localStorage.getItem('username');
    }

    register(username: string, password: string): boolean {
        // Check if the username already exists
        if (this.users.find((u) => u.username === username)) {
            return false; // Username already exists
        }

        // Add new user to the users array
        this.users.push({ username, password });

        // Save updated user data to the data.json file
        this.http.post(this.dataUrl, { users: this.users }).subscribe(() => {
            // Redirect to login page after successful registration
            this.router.navigate(['/login']);
        });

        return true; // Registration successful
    }
}
