import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";

@Component({
    template: `
       <div class="middle-box">
                    <h1>{{title}}</h1>
                    <p>Puede dirigirse a la página <a [routerLink]="['/']"><b>principal</b></a> si ya está autenticado</p>
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
export class E404Component {

    title:string='Página no encontrada';

}
