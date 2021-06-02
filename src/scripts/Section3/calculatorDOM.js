window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
var Calculator = /** @class */ (function () {
    function Calculator(xID, yID, outputID) {
        this.x = document.getElementById(xID);
        this.y = document.getElementById(yID);
        this.output = document.getElementById(outputID);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
