import { Component } from '@angular/core';


@Component({
    template: `
       <div class="middle-box">
                    <h1>{{title}}</h1>
                    <p>Es necesario que <a [routerLink]="['/auth/signin']"><b>inicie sesión</b></a> nuevamente  </p>
        </div>
    `,
    styles:[
        `
        .middle-box{
            position: absolute;
            top: 40%;
            left:50%;
            transform: translate(-50%,-50%);
            }
        .middle-box h1 {
            font-size: 100px;
            font-family: 'Anton', sans-serif;
            text-shadow: 2px 2px #b1b0b0;
            color: rgba(55, 98, 142, 0.5);
        }
        @media screen and (max-width: 500px) {
        .middle-box h1 {
            font-size: 70px;
        }
        }
        `
    ]
})
export class ExpiredComponent {

    title:string='Sesión Expirada';

}
