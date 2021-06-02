module interfaces {
    interface squareFunction {
        (x: number): number;
    }
    let squareBasic : squareFunction = (num: number) => num * num;

    //interface rect
    interface rectangle {
        h: number;
        w?: number;
    }
    let squareIt: 
        (rect: rectangle) => number;

    let rectA = {h: 7};
    let rectB = {h: 7, w: 12};

    squareIt = function(rect) {
        if (rect.w !== undefined){
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

    interface Person {
        name : string;
        age?: number;
        kids: number; 
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    let p: Person = {
        name: 'Liam',
        age: 23,
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        }, 
        makeYounger: function (years: number) {
            this.age -= years;
        }, 
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        }
    };

    let pets = p.calcPets();
    console.log(pets);

    p.makeYounger(5);
    let newAge = p.age;
    console.log(newAge);

    let msg = p.greet('Good day to you');
    console.log(msg);

    
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());


}