import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
        styles:[
        `
        .middle-box{
            position: absolute;
            top: 40%;
            left:50%;
            font-size:14px;
            transform: translate(-50%,-50%);
            }
        h2 {
            font-size: 40px;
            font-family: 'Anton', sans-serif;
            color: rgba(55, 98, 142, 1);
        }
        @media screen and (max-width: 500px) {
        h2 {
            font-size: 30px;
        }
        }
        `
    ]
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    isLoading=false;
    admin_flag:boolean=false;
   

    header={
            content: `Crear un acceso llenando los datos en el formulario.`,
            signin:''
    };

    formLabels={
        name:'Nombres',
        lastName:'Apellidos',
        mail:'Correo',
        password:'Contraseña',
        submit:'Registrar',
        admin:'Administrador'
    };

    constructor(private authService: AuthService) {}

    onSubmit() {
        this.isLoading=true;
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.admin_flag
        );
        console.log(user);
        this.authService.signup(user)
            .subscribe(
                data => {console.log(data); this.isLoading=false;},
                error => console.error(error)
            );
        this.myForm.reset();
        this.admin_flag=false;
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