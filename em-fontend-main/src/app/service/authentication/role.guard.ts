import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const role = this.authService.getRole();

    if (role === expectedRole) {
      return true; // Allow access if roles match
    } else {
      this.router.navigate(['/main']); // Redirect if roles don't match
      return false;
    }
  }
}
