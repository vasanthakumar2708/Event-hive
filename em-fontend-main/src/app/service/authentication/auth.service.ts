import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Helper to check if we are in a browser environment
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Store the token in local storage after login
  setToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  // Retrieve the token from local storage
  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('token');
    }
    return null;
  }

  // Decode the JWT token to get the user's role
  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken.role; // Return the user's role (e.g., 'user' or 'vendor')
    }
    return null;
  }

  // Decode the JWT token (base64 decode)
  decodeToken(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  // Clear token on logout
  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login-user']); // Redirect to user login or landing page after logout
  }

  // Check if a user is logged in by checking the presence of a token
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
