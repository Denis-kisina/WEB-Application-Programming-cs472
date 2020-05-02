/*
app.js
 */
console.log(window);

var someOnesName; // lexical environment: global envionment

function printName() {
    var someonesName2 = "John"; // function-scoped variable. // lexial environment is printName function
    someOnesName = "Anna";
    console.log(someOnesName);
    if (true) {
        const someonesName3 = "Bob"; //block-scoped variable
        console.log(someOnesName);
        console.log(someonesName3);
    }

}

printName();
// console.log(someOnesName2);

// JS Before 2015 (ES5 and lower)
//Global scope
//Function scope

//JS After 2015
//Block Scope
//Let and const


// Hoisting
//JS code during execution goes through 2 phases
//What i/gets hoisted
//All declarations (vars and functions) are hoisted

console.log(age);
// console.log(age1);
// console.log(age2);
var age;
const age1 = 23; // temporary dead-zone
let age2;

//hoisted function
printSum(1, 2);

function printSum(a, b) {
    console.log(a + b);
    const func1 = function () {
        var i = 0;
        if (i > 1) {
            console.log("Hello i");
        }
    }
}

// printSum2(1,2);
//What kind of function is this? //Function expression
// Does it get hoisted? No
const printSum2 = function (a, b) {
    console.log(a + b);
}

//Scope chain -- scopes are nested
var firstName = "Carlos"; //free variable

function computeAndPrintSum(a, b) {
    var lastName = "Ana";
    console.log(`${firstName}, the sum of ${a} and ${b} is ${a + b}`)
    const func1 = function () {
        console.log(`${lastName}, the sum of ${a} and ${b} is ${a + b}`)
    }
    func1();
}

computeAndPrintSum(1, 2);

console.log(a); //undefined
var a = 0;

var a; // undefined
console.log(a);
a = 0;

let b; //temporary ded-zone
console.log(b);
b = 1;

//console.log(a1);
a1 = 0;

// Functional Programming in JS
// First-Class function

// int age = 15;
// int calc(int a) {...}

const func2 = function () {
    //function expression
};

//Higher-order function -- a function that takes another function
const calculator = function (op1, op2, operation) {
    return operation(op1, op2);
}

function addOp(op1, op2) {
    return op1 + op2;
}

const addResult = calculator(1, 2, addOp);
console.log(addResult)

const addFunctionMaker = function () {
    const addFunc = function (a, b) {
        return a + b;
    }
    return addFunc;
}

const addOneandTwo = addFunctionMaker();
console.log(addOneandTwo(1, 2));

const employeeModule = (function () {
    let name;
    let age;
    let salary;

    const setAge = function (newAge) {
        name = newAge;
    };
    const setSalary = function (newSalary) {
        salary = newSalary;
    };
    const setName = function (newName) {
        name = newName;
    };
    const getAge = function () {
        return age;
    };
    const getSalary = function () {
        return salary;
    };
    const getName = function () {
        return name;
    };
    const increaseSalary = function (percentage) {
        salary = getSalary() + percentage * 0.01;
    };
    const incrementAge = function () {
        age += 1;
    };
    const toString = function () {
        return `Name: ${getName()} | Age: ${getAge()} | Salary: ${getSalary()} `;
    };
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        increaseAge: incrementAge,
        toString: toString
    };
})();

employeeModule.address = "";
employeeModule.getAddress = function () {
    return employeeModule.address;
};
employeeModule.setAddress = function (newAddress) {
    employeeModule.address = newAddress;
};

employeeModule.setAddress("fairfield");
console.log(" Address: " + employeeModule.getAddress());