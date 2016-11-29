import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-stepss',
    template: `
        <h2>Steps </h2>
        <div class="row">
            <app-steps-list [idProcess]="idProcess" class="col-md-6"></app-steps-list>
        </div>
        <hr>
        <div class="row">
            <app-steps-input [idProcess]="idProcess"></app-steps-input>
        </div>
        
    `
})
export class StepssComponent implements OnInit{
    idProcess:string='';
    constructor(private _route: ActivatedRoute){}
    ngOnInit(){
        var id = this._route.params.subscribe(params => {   
                 this.idProcess = params["id"];   
                 //console.log(this.idProcess); 
         });
    }

}