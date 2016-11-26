import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Process } from "./process.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ProcessService {
    private dataArray: Process[] = [];
    messageIsEdit = new EventEmitter<Process>();
    public url:string='http://localhost:3000/process/';
    
    constructor(private http: Http, private errorService: ErrorService) {
    }

    addData(message: Process) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.url + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Process(
                    result.obj.title,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.dataArray.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getData() {
        return this.http.get(this.url)
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Process[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Process(
                        message.title,
                        message.user.firstName,
                        message._id,
                        message.user._id)
                    );
                }
                this.dataArray = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editData(message: Process) {
        this.messageIsEdit.emit(message);
    }

    updateData(message: Process) {
       
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.patch(this.url + message.processId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
            });
    }

    deleteData(message: Process) {
        this.dataArray.splice(this.dataArray.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.url + message.processId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    } 
}