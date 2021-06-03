export interface IDataService {
    msg: string;
    getMessage(): string;
}

export class DataService implements IDataService {
    msg = 'Welcome!';
    getMessage() {
        return this.msg;
    }
}