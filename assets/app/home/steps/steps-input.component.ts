import { Component, OnInit,Input } from "@angular/core";
import { NgForm } from "@angular/forms";

import { StepsService } from "./steps.service";
import { Steps } from "./steps.model";

@Component({
    selector: 'app-steps-input',
    templateUrl: './steps-input.component.html'
})
export class StepsInputComponent implements OnInit {
    message: Steps;
    @Input() idProcess:string;
    result:string;

    constructor(private dataService: StepsService) {}

    onSubmit(form: NgForm) { 


      if (this.message) {
            // Edit
            console.log(this.message);
            this.message.title = form.value.title;
            this.dataService.updateData(this.message)
                .subscribe(
                    result => result => this.result=result
                );
            this.message = null;
        } else {
            // Create
            const message = new Steps(form.value.title, ' ',this.idProcess); 
            this.dataService.addData(message)
                .subscribe(
                    data => result => this.result=result,
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
            (message: Steps) => this.message = message
        );
    }
}