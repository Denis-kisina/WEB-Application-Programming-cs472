/**
 * W2D5 - Assignment 9
 * */
"use strict";
/*
1.	Define a JavaScript object literal named, person, with the following specification:
    a.	Person object should have the properties:
        i.	name (initialize this with empty string value)
        ii.	dateOfBirth (initialize this with empty string value)
    b.	Person object should have the methods:
        i.	getName (should return the value of the person’s name property)
        ii.	setName (should take as input parameter, a String value which it sets as the person’s name)

    Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) method, create an object named, john, whose name property is set to the string, “John” and whose dateOfBirth property is set to the date, December 10th, 1998.

    Print-out to the console, the information about the person named John, in the following format:
    “The person’s name is John”
    “John was born on 1998-12-10”

 */
const person = {
    name: "",
    dateOfBirth: "",
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    },
    setDateOfBirth: function(year, month, day) {
        this.dateOfBirth = new Date(year,month,day);
    },
    getDateOfBirth: function () {
        return this.dateOfBirth;
    },
    toString: function () {
        return `{"name": "${this.name}", "dateOfBirth": "${this.dateOfBirth}"`;
    }
};

const printPersonalDetails = function () {
    console.log(`The person’s name is ${this.getName()}\n`);
    console.log(`${this.getName()} was born on ${ new Intl.DateTimeFormat().format(this.getDateOfBirth())}`);
}
const john = Object.create(person);
john.setName("John");
john.setDateOfBirth(1998,12,10);

console.log(`The person’s name is ${john.getName()}\n`);
console.log(`${john.getName()} was born on ${ new Intl.DateTimeFormat().format(john.getDateOfBirth())}`);
// const johnsPrintedPersonalDetails = printPersonalDetails.bind(john);
// johnsPrintedPersonalDetails();

/*
2.	Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, create a generic object named, employee, with the following properties:
    a.	Salary (initialize this with the value zero dollars
    b.	hireDate (initialize this with the current date of today)
        and the following method:
    c.	doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, the employee’s information in the following format:

        “[Employee’s name] is a [jobTitle] who earns $[salary]”
        e.g. Anna is a Programmer who earns $249,995.50

    Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer.

    Note the console output should be: Anna is a Programmer who earns $249,995.50

 */
const employee = Object.create(person);
employee.salary = 0.0;
employee.hireDate = new Date();
employee.doJob = function (jobTitle) {
    console.log(`${this.getName()} is a ${jobTitle} who earns \$${this.salary}`);
}

const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob("Programmer");

/*
    3.	Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person. Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:
    {Name: John, DateOfBirth: 1998-12-10}
    Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.
    Print-out to the console, the information for the person named, Peter, using its toString() method.

 */
function Person (name, year, month, day) {
        this.name = name;
        this.dateOfBirth = new Date(year,month,day);
        // this.toString = function () {
        //     return `Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(this.dateOfBirth)}`;
        // }

};
Person.prototype.toString = function () {
    return `Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(this.dateOfBirth)}`;
}
const peter = new Person("Peter", 1985,11,10);

console.log(peter.toString());



/*
3.	Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person. Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:

    {Name: John, DateOfBirth: 1998-12-10}

    Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.

    Print-out to the console, the information for the person named, Peter, using its toString() method.

 */

class Person3  {
    constructor(name, year, month, day ) {
        this.name = name;
        this.dateOfBirth = new Intl.DateTimeFormat('en-US').format(new Date(year,month-1, day,0,0,0));
    }
    getName () {
        return this.name;
    }
    toString () {
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;
    }
};


/*
4.	Refer to your work on Lab Assignment 4. Add Javascript and JQuery code to work with your 2 HTML forms as follows:

    a.	Login Form: Add code such that when the Form is submitted by clicking on the Submit button, the values entered in the input fields are printed to the Console. Do this using mostly JQuery API. Note: Prevent the form submission operation from doing a post-back/page reload.
    b.	New Product Form: Add code such that when the form is submitted by a click on the Submit button, the values entered in the input fields are displayed in a <div> block that appears below of the form. Note: Prevent the form submission operation from doing a post-back/page reload.


 */