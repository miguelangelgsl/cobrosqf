import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from '../auth/auth-guard';
import { AdminGuard } from '../auth/admin-guard'; 
import { MessagesComponent } from "../messages/messages.component";
import { ProcessesComponent } from "../process/processes.component";
import { StepssComponent } from "../steps/stepss.component";
import { StartComponent } from "./start.component";
import { SignupComponent } from "../auth/signup.component";


const HOME_ROUTES: Routes = [
    { path: 'modulos',component:StartComponent ,canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent,canActivate: [AdminGuard] },
    { path: 'signup', component: SignupComponent,canActivate: [AdminGuard] },
    { path: '', component: ProcessesComponent,canActivate: [AuthGuard] },
    { path: 'steps/:id', component: StepssComponent,canActivate: [AuthGuard] },
];
   


export const homeRouting = RouterModule.forChild(HOME_ROUTES);