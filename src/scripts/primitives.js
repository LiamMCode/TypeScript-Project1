var primitives;
(function (primitives) {
    //any
    var data;
    var info;
    var dosomething = function (arg) {
        return arg;
    };
    var x = dosomething(5);
    //Primitives
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'no';
    };
    var hasHair = !!isBald();
    //string array
    function getArrayLength(x) {
        var len = x[0].length;
        return len;
    }
    var names = ['liam', 'barry', 'oli', 'bob'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    // null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(primitives || (primitives = {}));
