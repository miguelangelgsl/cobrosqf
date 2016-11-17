import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles:[
        `
        .middle-box{
            position: absolute;
            top: 40%;
            left:50%;
            transform: translate(-50%,-50%);
            }
        .middle-box h1 {
            font-size: 80px;
            font-family: 'Anton', sans-serif;
            text-shadow: 2px 2px #b1b0b0;
            color: rgba(55, 98, 142, 0.5);
        }
        @media screen and (max-width: 500px) {
        .middle-box h1 {
            font-size: 60px;
        }
        }
        `
    ]
})
export class SigninComponent {
    myForm: FormGroup;

    header={
            content: `Bienvenido a Agents inicie sesión con su correo y contraseña si aun no cuenta con acceso puede `,
            signup:'solicitar uno'
    };

    formLabels={
        mail:'Correo',
        password:'Contraseña',
        submit:'Iniciar Sesión'
    };

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}