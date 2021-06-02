interface iEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

class Engines implements iEngine{
    constructor(public horsePower: number, public engineType: string) { }
    
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements iEngine{
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'V6');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'V6');
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
    private _basePrice: number;
    private _engine: iEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: iEngine, make: string, model: string) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make; 
        this.model = model;
    }

    calculateTotal() : number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = ' ';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList() : string {
        return this.accessoryList;
    }

    get basePrice() : number {
        return this._basePrice;
    }
    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): iEngine {
        return this._engine;
    }
    set engine(value: iEngine) {
        if (value === undefined) throw 'Please supply and engine';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engines, make: string, model: string, bedLength: string, fourByFour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function() {
    var truck = new Truck(40000, new Engines(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    var auto = new Auto(40000, new Engines(250, 'V6'), 'Ford', 'Mustang');
    var myEngine = <Engines>auto.engine;
    alert(myEngine.horsePower.toString());
    // alert(truck.engine.engineType);
    // alert(truck.bedLength);
    // alert(truck.calculateTotal().toString());

    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(231, 'Towing Package'));
    truck.engine.start((status: boolean, engineType: string) => {
        alert(engineType + ' was started');
    });
}