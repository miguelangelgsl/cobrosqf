import { Component, Input } from "@angular/core";

import { Process } from "./process.model";
import { ProcessService } from "./process.service";

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
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
export class ProcessComponent {
    @Input() message: Process;

    constructor(private messageService: ProcessService) {}

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