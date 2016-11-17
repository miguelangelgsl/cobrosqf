import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ProcessService } from "./process.service";
import { Process } from "./process.model";

@Component({
    selector: 'app-process-input',
    templateUrl: './process-input.component.html'
})
export class ProcessInputComponent implements OnInit {
    message: Process;

    constructor(private dataService: ProcessService) {}

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.title = form.value.title;
            this.dataService.updateData(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            const message = new Process(form.value.title, ' ');
            this.dataService.addData(message)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.dataService.messageIsEdit.subscribe(
            (message: Process) => this.message = message
        );
    }
}