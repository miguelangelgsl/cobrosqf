import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
 isloading:boolean=false;
 name:string='';
 email:string='';
constructor(private authService: AuthService, private router: Router) {

     this.name=localStorage.getItem('name');
        this.email=localStorage.getItem('email');
}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth']);
    }

    isAdmin() {

        return JSON.parse(localStorage.getItem('admin'));
    }

}