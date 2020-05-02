/**
 * What-is-this.js
 */

"use strict";

//"this" in the global environment/scope

console.log(this);

//"this" inside a function declaration

function f() {
    console.log(this);
}
f();
//"this" always typically refers to the object on which the function
//where "this" was encountered was called.


//"this" inside a nested function
function f1() {
    let firstName = "Ana";
    const g = function () {
        // with "use strict" on, this = undefined
        // without "use strict", this = window
                console.log(this);
    }
    g();
}
f1();
// "this" inside a nested arrow function
// "this" refers to the surrounding lexical scope -- global window object
function f3() {
    let firstName = "Ana";
    const g = () => console.log(this);
    g();
}
f3();

//"this" inside a construct function
function Person(firstName) {
    console.log(this);
    this.firstName = firstName;
    console.log(this);
}
const ana = new Person("AnaCost");

// inside nested function inside object literal - the self pattern
const person2 = {
    firstName: "Ana2",
    getFirstName: function () {
        console.log(this); // "this" points to person2 object
        const self = this;
        const changeFirstName = function (newFirstName) {
            // console.log(this); // window
            console.log(self);
            // this.firstName = newFirstName;
            self.firstName = newFirstName;
        }
        changeFirstName("Bob2");
        console.log(this.firstName);
        return this.firstName;
    }
};
console.log(person2.getFirstName());

// Alternative to the self pattern
// Using arrow function
// "this" refers to the surrounding lexical scope
const person3 = {
    firstName: "Ana3",
    getFirstName: function () {
        console.log(this); // "this" points to person3 object
        const changeFirstName =  (newFirstName) => {
            console.log(this); // "this" points to person3 object
            this.firstName = newFirstName;
        }
        changeFirstName("Bob3");
        console.log(this.firstName);
        return this.firstName;
    }
};
console.log(person3.getFirstName());

//"this" inside an object literal
const f2 = {
    firstName:  "Ana",
    g: function () {
        console.log(this);
        return this.firstName;
    }
}
console.log(f2.g());

// Using call, apply and bind to specify "this" reference

// using Function.prototype.call
const person4 = {
    firstName: "Ana4",
    getFirstName: function () {
        console.log(this); // "this" points to person4 object
        const changeFirstName =  function(newFirstName) {
            console.log(this);
            this.firstName = newFirstName;
        }
        changeFirstName.call(this, "Bob4");
        console.log(this.firstName);
        return this.firstName;
    }
};
console.log(person4.getFirstName());

// using Function.prototype.apply
const person5 = {
    firstName: "Ana5",
    getFirstName: function () {
        console.log(this); // "this" points to person5 object
        const changeFirstName =  function(newFirstName) {
            console.log(this);
            this.firstName = newFirstName;
        }
        changeFirstName.apply(this, ["Bob5"]);
        console.log(this.firstName);
        return this.firstName;
    }
};
console.log(person5.getFirstName());

// using Function.prototype.bind -- Function Borrowing
const person6 = {
    firstName: "Ana6",
    getFirstName: function () {
        console.log(this); // "this" points to person6 object
        const changeFirstName =  function(newFirstName) {
            console.log(this);
            this.firstName = newFirstName;
        }
        const changeFirstNameOfPerson6 = changeFirstName.bind(this, "Bob6");
        changeFirstNameOfPerson6();
        console.log(this.firstName);
        return this.firstName;
    }
};
console.log(person6.getFirstName());

// -- Function borrowing using Function.prototype.bind
const employee = {
    firstName: null,
    lastName: null,
    getFullName: function () {
        return `${this.firstName}  ${this.lastName}`;
    }
}

const paySalary = function (salary, payDate) {
    console.log(`${this.getFullName()} is paid ${salary} on ${payDate}`)
}

//Some named Anna IS-A employee
const anna = Object.create(employee);
anna.firstName = "Anna";
anna.lastName = "Smith";

const payAnaasSalary = paySalary.bind(anna, 25500.50, new Date());
payAnaasSalary();

const bob = Object.create(employee);
bob.firstName = "Bob";
bob.lastName = "Geldorf";
const payBobsSalary = paySalary.bind(bob);
payBobsSalary(45000, new Date());