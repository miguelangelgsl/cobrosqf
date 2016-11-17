import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
 isloading:boolean=false;
constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }


}