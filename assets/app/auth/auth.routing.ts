import { Routes, RouterModule } from "@angular/router";
// import { AdminGuard } from './admin-guard';
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

const AUTH_ROUTES: Routes = [
    { path: '', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
 
export const authRouting = RouterModule.forChild(AUTH_ROUTES); 