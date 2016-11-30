import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Steps } from "./steps.model";
import { ErrorService } from "../../errors/error.service";
import { configApp } from "../../setup/config.App";

@Injectable()
export class StepsService {
    private dataArray: Steps[] = [];
    messageIsEdit = new EventEmitter<Steps>();
    public url:string=`http://${configApp.server}:${configApp.portHost}/stepss/`; 
    
    constructor(private http: Http, private errorService: ErrorService) {
    }

    addData(message: Steps) {
      
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.url + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
        
                const step = new Steps(
                    result.obj.title,
                    result.obj.user.firstName,
                    result.obj.process._id,
                    result.obj.user._id,
                    result.obj._id);

                this.dataArray.push(step);

                return step;
     
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getData(id:string) { //(title: ,username: , processId: , userId?: )


        /////////////////////////////////////////////
        const body = id;
        //console.log(body);
        return this.http.get(this.url+body)
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Steps[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Steps(
                        message.title,
                        message.user.firstName,
                        message.process,
                        message.user._id,
                        message._id)
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

    editData(message: Steps) {
        
        this.messageIsEdit.emit(message);
       
    }

    updateData(message: Steps) {
      // console.log(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.patch(this.url + message.stepsId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
            });
    }

    deleteData(message: Steps) {
        this.dataArray.splice(this.dataArray.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.url + message.stepsId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    } 
}