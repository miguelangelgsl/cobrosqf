import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from "./home.routing";
import { StartComponent } from "./start.component";
import { MessageModule } from "./messages/message.module";
import { ProcessModule } from "./process/process.module";
import { StepsModule } from "./steps/steps.module";

 


@NgModule({
    declarations: [
        StartComponent
    ],
    imports: [
        CommonModule,
        homeRouting,
        MessageModule,
        ProcessModule,
        StepsModule
    ]
})
export class HomeModule {

}