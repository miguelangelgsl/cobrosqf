import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

// Ruta Principal
import { routing } from "./app.routing";

//Main Components
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HomeComponent } from './home/home.component';

//Layout
import { NavBarComponent } from './layout/navbar.component';

//Service Security and Guard
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from './auth/auth-guard';
import { AdminGuard } from './auth/admin-guard';

//Error Pages
import { ErrorsModule } from './errors/errors.module';



 
@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HomeComponent,
        NavBarComponent,
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ErrorsModule
    ],
    providers: [AuthService,AuthGuard,AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}