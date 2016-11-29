import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StepsComponent } from "./steps.component";
import { StepssComponent } from "./stepss.component";
import { StepsListComponent } from "./steps-list.component";
import { StepsInputComponent } from "./steps-input.component";
import { StepsService } from "./steps.service";

//Notificactions
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
    declarations: [
        StepsComponent,
        StepsListComponent,
        StepssComponent,
        StepsInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule
    ],
    providers: [StepsService]
}) 
export class StepsModule {

}