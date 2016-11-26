import { Component } from "@angular/core";

@Component({
    selector: 'app-processes',
    template: `
        <h2>Checklist</h2>
        <div class="row">
            <app-process-list></app-process-list>
        </div>
        <hr>
        <div class="row">
            <app-process-input></app-process-input>
        </div>
        
    `
})
export class ProcessesComponent {

}