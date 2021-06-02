var x : number = 1;
var y;
var firstName : string = 'John';
var num1 = 100;
var num2: number = 20;

function addNumbers(n1 : number, n2 : number, n3 : number) {
    var result = n1 + n2 + n3;
    var msg = 'Sum is = ' + result;
    alert(msg);
}

addNumbers(num1, num2, x);