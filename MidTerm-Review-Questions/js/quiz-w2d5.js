/*
      ===================W2D5 - Quiz2 ========================
 */

/*
4.	(2 points) Assume you have been tasked to develop a web application that manages the Students Registration data for a school. Write JavaScript code below, for enabling creation of objects of type named, Student, using a Constructor Function. The specification for the application states that a student should have the following data fields (properties):
    StudentId (e.g. 000-61-0001)
    FirstName (e.g. Bob)
    LastName (e.g. Jones)
    Cgpa (e.g. 3.51)
 */

"use strict";

function Student(studentId, firstName, lastName, cgpa) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cgpa = cgpa;
}

/*
    5.	(3 points) Using the Construction Function you have coded in Question 4 above, now write JavaScript code to create an array of students, using the following data:

    Student 1:
        StudentId: 000-61-0001
        FirstName: Anabelle
        LastName: Smith
        Cgpa: 3.05

    Student 2:
        StudentId: 000-61-0002
        FirstName: Bob
        LastName: Jones
        Cgpa: 2.96

    Next, write code to add a method named, toCSVString, to the student objects, such that it returns the String representation of a student object, in Comma Separated Value (CSV) format.
    For example: s1.toCSVString() should return the String, “000-61-0001, Anabelle, Smith, 3.05” (Note: where s1 refers to a student object).

 */
const arrayStudents = [];

const student1 = new Student("000-61-0001", "Anabelle", "Smith", 3.05);
const student2 = new Student("000-61-0002", "Bob", "Jones", 2.96);

arrayStudents.push(student1);
arrayStudents.push(student2);

Student.prototype.toCSVString = function () {
    return `${this.studentId},${this.firstName},${this.lastName},${this.cgpa}`;
};

Student.prototype.toJSONString = function () {
    return `{"studentId": "${this.studentId}", "firstName": "${this.firstName}", "lastName": "${this.lastName}", "cgpa": "${this.cgpa}`;
};
//print all students
const printAllStudentsInCSVFormat = function () {
    for (const student of arrayStudents){
        console.log(student.toCSVString());
    }
};

const printAllStudentsInJSONFormat = function () {
    for (const student of arrayStudents){
        console.log(student.toJSONString());
    }
}
printAllStudentsInCSVFormat();
printAllStudentsInJSONFormat();

/*
6.	(4.5 points) By applying the Module Pattern, write JavaScript code for a module named, myCalculator. In your module, implement code for the following two methods:
    a.	doAddition: this method takes as parameters, two numbers and it returns the sum of the numbers.
    b.	doMultiplication: this method takes as parameters, two numbers and it returns the product of the numbers.
    Write code to use your module to call/test your implementation of the two methods and simply print-out each result to the console.

 */
const myCalculator = (function () {
    let number1 = 0;
    let number2 = 0;
    const add = function (number1, number2) {
        let sum = 0;
        sum = number1 + number2;
        return sum;
    };
    // using arrow function
    // const add2 = (number1, number2) => (number1 + number2);
    const multiply = function (number1, number2) {
        let multiple = 0;
        multiple = number1 * number2;
        return multiple;
    };
    // using arrow function
    //const multiply2 = (number1, number2) => (number1 * number2);
    return {
        doAddition: add,
        doMultiplication: multiply
    }
})();

// Calling the module
let num1 = 15;
let num2 = 9;
console.log(`The Addition of ${num1} and ${num2}  is ${myCalculator.doAddition(num1,num2)}`);
console.log(`The Mulplication of ${num1} and ${num2} is ${myCalculator.doMultiplication(num1,num2)}`);
