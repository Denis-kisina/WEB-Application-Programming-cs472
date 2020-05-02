"use strict";
//Qn. 4
function Student(studentId, firstName, lastName, cgpa) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cgpa = cgpa;
}

//Qn 5.
const arrayStudents = [];

const student1 = new Student("000-61-0001", "Anabelle", "Smith", 3.05);
const student2 = new Student("000-61-0002", "Bob", "Jones", 2.96);

arrayStudents.push(student1);
arrayStudents.push(student2);

Student.prototype.toCSVString = function () {
    return `${this.studentId},${this.firstName},${this.lastName},${this.cgpa}`;
}

console.log(x); // prints undefined
var x = 5;
console.log(x); // print 5
const module = (function () {
let x = 0;
console.log(x);
});


function outerFunction() {

    let outerVariable = 1;

    function InnerFunction() {
        alert(outerVariable);
    }

    InnerFunction();
}
outerFunction();

const myCalculator  = function(){

    const doAddition = function(num1, num2){

        return num1+num2;
    };
    const doMultiplication = function(num1, num2){

        return num1*num2;
    };

    return{
        doAddition: doAddition,
        doMultiplication: doMultiplication
    };
};
console.log(myCalculator.doAddition(2,3))
console.log(myCalculator.doMultiplication(2,3));