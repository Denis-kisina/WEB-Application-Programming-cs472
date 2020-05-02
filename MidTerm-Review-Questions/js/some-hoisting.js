/*
Some-hoisting.js
Date: 30-Apr-2020
 */
"use strict";
// what scope is the variable, x, in? Global scope
// console.log(x);
// x = 10; // is x hoisted? Yes or No? No, because it is not a variable declaration
// Hoisting: variable declarations or function declarations
// const x = 10; // const/let gets hoisted but however you can not use it before it is declared


console.log(x); // undefined
var x = 1;
const f = function () {
    console.log(x); // 1
    x = 15; // x is in the global scope even if it is seating in the f function lexical environment
            // with var keyword added, function scope, without var, global variable
    console.log(x); //15
    if(x > 10) {
        var y = 20; // var makes it function scope; const/let makes y block-scoped
        console.log(x);
        console.log(y);
    }
    console.log(y); // will get a reference error because y is limited by block scope
}
f();
console.log(x); //15