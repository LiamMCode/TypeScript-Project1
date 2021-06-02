module dynamic_types {
    var person: string; 
    person = 'Liam Morgan';
    console.log(person.substring(1,4));

    var person2 = {
        name: 'Barry', 
        age: 23
    };

    console.log(person2.name.substring(1,4));
}