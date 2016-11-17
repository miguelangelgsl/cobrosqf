export class Process {
    title: string;
    username: string;
    processId?: string;
    userId?: string;

    constructor(title: string, username: string, processId?: string, userId?: string) {
        this.title = title;
        this.username = username;
        this.processId = processId;
        this.userId = userId;
    }
}