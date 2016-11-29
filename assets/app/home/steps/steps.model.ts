export class Steps {

    title: string;
    stepsId?: string;
    processId: string;
    userId?: string;
    username: string;

    constructor(title: string,username: string, processId: string, userId?: string,stepsId?:string) {
       
        this.stepsId = stepsId;
        this.title = title;
        this.processId = processId;
        this.userId = userId;
        this.username = username;
    }
}  