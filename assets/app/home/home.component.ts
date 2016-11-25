import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";


@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

constructor(private authService: AuthService, private router: Router) { }

   ngOnInit(){
        this.authService.isExpired().subscribe(
                obj => {
                    if(!obj.flag) this.router.navigate(['/expired']);

                }
            );
    }

}
