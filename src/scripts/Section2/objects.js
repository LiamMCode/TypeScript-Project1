var objects;
(function (objects) {
    //Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rectangle area= ' + rectangle.calcArea);
    //Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1(2);
    console.log('squareIt1=' + val1);
    var val1 = squareIt1(8);
    console.log('squareIt1=' + val1);
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 });
    console.log('rectangle of h and w of 10 =' + sq1);
    var sq2 = squareIt({ h: 10, w: 40 });
    console.log('rectangle of h of 10 and w of 40 =' + sq2);
})(objects || (objects = {}));
