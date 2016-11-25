import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
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
            text-shadow: 2px 2px #787878;
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
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    
    header={
            content: `Crear acceso llenando los datos en el formulario.`,
            signin:''
    };

    formLabels={
        name:'Nombres',
        lastName:'Apellidos',
        mail:'Correo',
        password:'Contraseña',
        submit:'Registrar',
    };

    constructor(private authService: AuthService) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}