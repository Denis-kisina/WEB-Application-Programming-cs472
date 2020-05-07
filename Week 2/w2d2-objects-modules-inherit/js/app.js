/**
 * app.js
 */

 // Basics of Objects

 // JavaScipt Object Literal

 const person = {
     name: "",
     dateOfBirth: "",
     getName: function() {
         return this.name;
     },
     setName: function(newName) {
         this.name = newName;
     },
     toString: function() {
         return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
     }
 }

 // Inheritance using Object.create(...)
 // Prototypal Inheritance

 const john = Object.create(person);
 john.setName("John");
 john.dateOfBirth = new Date("1998-12-10");

 console.log(`The Person's name is ${john.getName()}`);
 console.log(`${john.name} was born on ${john.dateOfBirth}`);

 // Using Construction Function

 //  const Person = function (name, dateOfBirth) {

//  }

 function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
 }

 const ana = new Person("Ana", new Date("1985-11-10"));
 Person.prototype.toString = function() {
     return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
 }

 console.log(ana.toString());

 // Array.prototype.*
 const nums = [1,2,3];
 console.log(typeof nums);
 Array.prototype.sayHello = function(name) {
     console.log(`Hello, ${name}`);
 }

 console.log(nums.sayHello("Ana"));
// Prototype chain

class Person2 {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    toString() {
        return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
    }
}

let peter = new Person2("Peter", new Date("2001-4-29"));
console.log(peter.toString());

class Employee extends Person {
    constructor(name, dateBirth, salary) {
        super(name, dateBirth);
        this.salary = salary;
    }
    toString() {
        return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth}, salary: ${this.salary}}`;
    }
}

const emp1 = new Employee("Joe", new Date("2004-5-31"), 20000);
console.log(emp1.toString());

