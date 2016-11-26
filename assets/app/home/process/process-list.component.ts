import { Component, OnInit } from "@angular/core";

import { Process } from "./process.model";
import { ProcessService } from "./process.service";

@Component({
    selector: 'app-process-list',
    template: `
            <app-process
                   [message]="message"
                    *ngFor="let message of messages"></app-process>
 
    `
})
export class ProcessListComponent implements OnInit {
    messages: Process[];

    constructor(private dataService: ProcessService) {}

    ngOnInit() {
        this.dataService.getData()
            .subscribe(
                (messages: Process[]) => {
                    this.messages = messages;

                   // console.log(messages);// processId

                }
            );
    }

   
}