import { Component, OnInit,Input } from "@angular/core";

import { Steps } from "./steps.model";
import { StepsService } from "./steps.service";

@Component({
    selector: 'app-steps-list',
    template: `
    <ul class="list-group">
        <app-steps
                   [message]="message"
                    *ngFor="let message of messages,let i=index"
                    [index]="i+1"></app-steps>
    </ul>   
        
    ` 
})
export class StepsListComponent implements OnInit {
    messages: Steps[];
    @Input() idProcess:string;
    constructor(private dataService: StepsService) {}

    ngOnInit() {
        this.dataService.getData(this.idProcess)
            .subscribe(
                (messages: Steps[]) => {
                    this.messages = messages;
                    //console.log(messages);
                }
            );
    }
}