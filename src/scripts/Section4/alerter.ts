import ds = require('./dataservice');

export interface IAlerter {
    name : string;
    showMessage(): void;
}
var dataservice = new ds.DataService();

export class Alerter implements IAlerter {
    name = 'Liam';
    showMessage() {
        var msg = dataservice.getMessage();
        alert(msg + ', ' + this.name);
    }
}