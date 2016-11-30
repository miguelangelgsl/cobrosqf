import { Component,Input } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    
    <router-outlet></router-outlet>
            <app-error></app-error>
    `
})
export class AppComponent{
    @Input() app;
}
