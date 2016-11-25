import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      if(JSON.parse(localStorage.getItem('admin')))
      return true; 
      else {
          this.router.navigate(['notauthorized']);
          return false; 
      }
    }

    this.router.navigate(['/auth/signin']);
    return false;
  }
}