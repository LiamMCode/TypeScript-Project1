window.onload = function() {
    var calc = new Calculator('X', 'Y', 'Output');
};

class Calculator {
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output: HTMLSpanElement;

    constructor(xID: string, yID: string, outputID: string) {
        this.x = <HTMLInputElement>document.getElementById(xID);
        this.y = <HTMLInputElement>document.getElementById(yID);
        this.output = <HTMLSpanElement>document.getElementById(outputID);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Add').addEventListener('click', event => {
            this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', event => {
            this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
    }
    add(x: number, y: number) {
        return x + y;
    }
    subtract(x: number, y: number) {
        return x - y;
    }
}