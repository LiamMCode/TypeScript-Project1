// this only works for newer browsers see comments for changes so that code can run on older browsers 
class Engine {
    constructor(public horsePower: number, public engineType: string) { }
}

class Cars {
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
        //this.setEngine(engine);
    }

    //getEngine(): Engine
    get engine(): Engine {
        return this._engine;
    }

    //setEngine(): Engine
    set engine(value: Engine) {
        if (value === undefined) throw 'Please supply an engine';
        this._engine = value;
    }

    start() : void {
        alert('Car engine started ' + this._engine.engineType);
    }
}
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Cars(engine);
    alert(car.engine.engineType);
    car.start();
}