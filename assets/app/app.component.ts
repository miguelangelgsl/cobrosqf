import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
            <app-error></app-error>
    `
})
export class AppComponent {


}
