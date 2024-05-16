import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule],
})
export class NavComponent {
    isMenuOpen: boolean = false;

    constructor(private authService: AuthService, private router: Router) {}

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
    // Method to check if the user is logged in
    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    // Method to get the logged username
    getUsername(): string | null {
        return this.authService.getLoggedInUser();
    }

    // Method to logout the user
    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
