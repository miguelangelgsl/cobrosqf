import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth-guard';
import { E404Component } from './errors/E404.component';

import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { NotAuthorizedComponent } from './errors/not_authorized.component';
import { ExpiredComponent } from './errors/expired.component';

const APP_ROUTES: Routes = [
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: '', component: HomeComponent, loadChildren: './home/home.module#HomeModule' },
    { path: 'notauthorized',component: NotAuthorizedComponent },
    { path: 'expired',component: ExpiredComponent},
    { path: '**',component: E404Component ,canActivate: [AuthGuard] }
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);