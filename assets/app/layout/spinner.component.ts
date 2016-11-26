import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
                 <div *ngIf="visible" class="centering text-center text-primary" 
                        style="  min-height: 100%; 
                                 min-height: 100vh; 
                                 display: flex;
                                 align-items: center; ">

                        <div class="sk-folding-cube">
                        <div class="sk-cube1 sk-cube"></div>
                        <div class="sk-cube2 sk-cube"></div>
                        <div class="sk-cube4 sk-cube"></div>
                        <div class="sk-cube3 sk-cube"></div>
                        </div> 
                  
                    
                </div>
    `
})
export class SpinnerComponent { 
    @Input() visible = true; 
}