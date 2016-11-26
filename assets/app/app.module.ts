import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

//Main Components
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HomeComponent } from './home/home.component';

//Service Security and Guard
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from './auth/auth-guard';
import { AdminGuard } from './auth/admin-guard';


//Layout
import { NavBarComponent } from './layout/navbar.component';

//Error Pages
import { E404Component } from './errors/E404.component';
import { NotAuthorizedComponent } from './errors/not_authorized.component';
import { ExpiredComponent } from './errors/expired.component';
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

 
@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent,
        HomeComponent,
        NavBarComponent,
        E404Component,
        NotAuthorizedComponent,
        ExpiredComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule
    ],
    providers: [AuthService, ErrorService,AuthGuard,AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}