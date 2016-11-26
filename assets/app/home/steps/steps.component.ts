import { Component, Input } from "@angular/core";

import { Steps } from "./steps.model";
import { StepsService } from "./steps.service";

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class StepsComponent {
    @Input() message: Steps;


    constructor(private messageService: StepsService) {
    }

    onEdit() {
        this.messageService.editData(this.message);
    }

    onDelete() {
        this.messageService.deleteData(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}