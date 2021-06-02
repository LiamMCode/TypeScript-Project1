var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Cars = /** @class */ (function () {
    function Cars(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Cars.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Cars.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return Cars;
}());
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Cars(engine);
    alert(car.engine.engineType);
    car.start();
};
