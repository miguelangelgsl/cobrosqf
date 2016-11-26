import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { E404Component } from "./E404.component";
import { ErrorComponent } from "./error.component";
import { ExpiredComponent } from "./expired.component";
import { NotAuthorizedComponent } from "./not_authorized.component";
import { ErrorService } from "./error.service";

@NgModule({
    declarations: [
        E404Component,
        ErrorComponent,
        ExpiredComponent,
        NotAuthorizedComponent
    ],
    exports: [
        E404Component,
        ErrorComponent,
        ExpiredComponent,
        NotAuthorizedComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [ErrorService]
})
export class ErrorsModule {
 
}