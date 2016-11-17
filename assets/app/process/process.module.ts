import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProcessComponent } from "./process.component";
import { ProcessesComponent } from "./processes.component";
import { ProcessListComponent } from "./process-list.component";
import { ProcessInputComponent } from "./process-input.component";
import { ProcessService } from "./process.service";

@NgModule({
    declarations: [
        ProcessComponent,
        ProcessListComponent,
        ProcessesComponent,
        ProcessInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [ProcessService]
})
export class ProcessModule {

}