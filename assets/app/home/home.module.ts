import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from "../auth/signup.component";
import { homeRouting } from "./home.routing";
import { StartComponent } from "./start.component";
import { MessageModule } from "../messages/message.module";
import { ProcessModule } from "../process/process.module";
import { StepsModule } from "../steps/steps.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../layout/spinner.component';

@NgModule({
    declarations: [
        StartComponent,
        SignupComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        homeRouting,
        MessageModule,
        ProcessModule,
        StepsModule,
        ReactiveFormsModule
    ]
})
export class HomeModule {

}