import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StepsComponent } from "./steps.component";
import { StepssComponent } from "./stepss.component";
import { StepsListComponent } from "./steps-list.component";
import { StepsInputComponent } from "./steps-input.component";
import { StepsService } from "./steps.service";

@NgModule({
    declarations: [
        StepsComponent,
        StepsListComponent,
        StepssComponent,
        StepsInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [StepsService]
}) 
export class StepsModule {

}