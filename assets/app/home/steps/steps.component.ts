import { Component, Input } from "@angular/core";

import { Steps } from "./steps.model";
import { StepsService } from "./steps.service";

import {NotificationsService} from 'angular2-notifications';

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
        .simple-notification.error { background: #F44336; }
        .simple-notification.success { background: red; }
        .simple-notification.alert { background: #ffdb5b; }
        .simple-notification.info { background: #03A9F4; }

    `]
})
export class StepsComponent {
    @Input() data: Steps;
    @Input() index: number;
   // @Input() message:string;

// type ={
//     id?: string
//     type: string
//     icon: string
//     title?: string
//     content?: string
//     override?: any
//     html?: any
//     state?: string
//     createdOn?: Date
//     destroyedOn?: Date
//     animate?: string
//     timeOut?: number
//     maxLength?: number
//     pauseOnHover?: boolean
//     clickToClose?: boolean
//     theClass?: string
//     click?: EventEmitter<{}>;
// }
// export interface Options {
//   timeOut?: number;
//   showProgressBar?: boolean;
//   pauseOnHover?: boolean;
//   lastOnBottom?: boolean;
//   clickToClose?: boolean;
//   maxLength?: number;
//   maxStacks?: number;
//   preventDuplicates?: number;
//   preventLastDuplicates?: boolean | string;
//   theClass?: string;
//   rtl?: boolean;
//   animate?: 'fromRight' | 'fromLeft' | 'rotate' | 'scale';
//   icons?: Icons;
//   position?: ['top' | 'bottom', 'right' | 'left'];
// }
      public options = {
        timeOut: 30000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'bottom'],
        icons:'error'
    };


    constructor(private dataService: StepsService, private _service: NotificationsService,) {
    }

    onEdit() {
       //console.log( this.message);
        this.dataService.editData(this.data);
    }

    onDelete() {
        this.dataService.deleteData(this.data)
            .subscribe(
                result => {
                    //console.log(result);
                    this._service.success('Registro eliminado', `Titulo: ${result.title}`);
            }
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.data.userId;
    }
}