// the constructor function and ES6+ class syntaxis, put these functions away from the general one not to overwhelm it;
function Person(name, age) {
    this.name = name;
    this.age = age;
}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// created a function for making an object in different ways;
function getPersons(name, age) {
    return [
        {
            name,
            age
        },
        Object.assign({}, {name, age}),
        Object.create({}, {
            name: {
                value: name,
                configurable: true,
                writable: true,
                enumerable: true
            },
            age: {
                value: age,
                configurable: true,
                writable: true,
                enumerable: true
            }
            }),
            new Person(name, age),
            new User(name, age)
    ];
}
// example of usage;
console.log(getPersons('Dima', 33));