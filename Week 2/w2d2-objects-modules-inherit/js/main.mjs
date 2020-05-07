/**
 * main.js
 */

 import {Person} from "./model/esmodule-person.mjs";

 const joe = new Person("Joe", 21);

 console.log(`${joe.firstName}`);
 console.log(`${joe.age}`);