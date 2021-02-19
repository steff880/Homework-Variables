// Homework Assignment #2: Variables and Constants

// Differences between let, const and var

// Hoisting

// Hoisting is a Javascript behaviour of moving all declarations to the top of the current scope. It can be global or local.
// It also means that variables can be used, before they are declared.
// But in order for it to work we need to use var

// Example

number = 1;

var otherNumber = number + 5;

var number;

console.log(otherNumber);

// This is also one of the differences between var and let/const
// If we try to do the same with let, it would not work and will result in "ReferenceError"
// If we do the same with const, the code will not run

// myNumber = 2;

// let myOtherNumber = myNumber - 1;

// let myNumber;
// console.log(myOtherNumber);

// Same thing but with const

// _number = 3;

// const myNum = _number + 4;
// const _number;
// console.log(myNum);

// We can declare a variable with let and give it a value later but can not do this with const
// So it is better to use let in this case

function greet() {
    let name;

    if (false) {
        name = "John";
        console.log("Hello " + name);
    } else {
        name = "Steve";
        console.log("Hello " + name);
    }
}

greet();

// const variables must be assigned a value when they are declared
// function sayHi() {
//     const differentName;

//     if (true) {
//         differentName = "Dave";
//         console.log("Hi " + differentName);
//     } else {
//         differentName = "Jake";
//         console.log("Hi " + differentName);
//     }
// }

// sayHi();

// Also we can change the value of let but can not with const

let movie = "The Batman";
console.log(movie);

movie = "Superman";
console.log(movie);


const otherMovie = "Joker";
console.log(otherMovie);
otherMovie = "Spider-man";
console.log(otherMovie);

// It is appropriate to use const when we don't want something to be changed


// So in general var declarations are globally scoped or function scoped, but let and const are block scoped.
