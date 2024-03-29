var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engines = /** @class */ (function () {
    function Engines(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engines.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engines.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engines;
}());
var CustomEngine = /** @class */ (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'V6');
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'V6');
        }, 1000);
    };
    return CustomEngine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = ' ';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply and engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(options) {
        var _this = _super.call(this, options) || this;
        _this.bedLength = options.bedLength;
        _this.fourByFour = options.fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
window.onload = function () {
    // var truck = new Truck(40000, new Engines(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    // var auto = new Auto(40000, new Engines(250, 'V6'), 'Ford', 'Mustang');
    // var myEngine = <Engines>auto.engine;
    // alert(myEngine.horsePower.toString());
    // alert(truck.engine.engineType);
    // alert(truck.bedLength);
    // alert(truck.calculateTotal().toString());
    // truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(231, 'Towing Package'));
    // truck.engine.start((status: boolean, engineType: string) => {
    //     alert(engineType + ' was started');
    // });
    var truck = new Truck({
        engine: new Engines(250, 'V8'),
        basePrice: 45000,
        make: 'Ford',
        model: 'F-150',
        bedLength: 'Long',
        fourByFour: true
    });
    alert(truck.bedLength);
};
