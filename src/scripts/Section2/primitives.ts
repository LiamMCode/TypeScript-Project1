module primitives {
    //any
    var data: any;
    var info;
    var dosomething : any = function (arg : any) {
        return arg;
    }
    var x = dosomething(5);

    //Primitives
    var age : number = 21;
    var score: number = 34.56;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () {
        return 'no';
    }
    var hasHair = !!isBald();

    //string array
    function getArrayLength(x: string[]) {
        var len : number = x[0].length;
        return len;
    }
    var names: string[] = ['liam', 'barry', 'oli', 'bob'];
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));

    // null
    var guitarSales : any = null;
    var animal = null;
    var orderDate : Date = null

    //undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}