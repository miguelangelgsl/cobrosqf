import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth-guard';
import { E404Component } from './E404.component';

import { HomeComponent } from './home.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { NotAuthorizedComponent } from './not_authorized.component';

const APP_ROUTES: Routes = [
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: '', component: HomeComponent, loadChildren: './home.module#HomeModule' },
    { path: 'notauthorized',component: NotAuthorizedComponent ,canActivate: [AuthGuard] },
    { path: '**',component: E404Component ,canActivate: [AuthGuard] }
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);