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
    isLoading=false;
    appName:string;

    header={
            content: `Bienvenido a Agents inicie sesión con su correo y contraseña. `,
            signup:''
    };

    formLabels={
        mail:'Correo',
        password:'Contraseña',
        submit:'Iniciar Sesión'
    };

    constructor(private authService: AuthService, private router: Router) {
        this.appName= authService.appName();
    }

    onSubmit() {
        this.isLoading=true;
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe( 
                data => {

                    var admin='false';
                    if(data.admin==true) admin='true';

                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    localStorage.setItem('admin', admin);
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    this.router.navigateByUrl('/');
                    this.isLoading=false;
                },
                error => {/*console.error(error);*/ this.isLoading=false;}
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