import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { authRouting } from "./auth.routing";

@NgModule({
    declarations: [
        SigninComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}