/**
 * modules.js
 */

 // Global environment/scope
 console.log(window);

 // Use IIFE
 const module = (function() { // Modules Pattern
    let firstName = "Peter";

    const getFirstName = function() {
        return firstName;
    }

    const setFirstName = function(newName) {
        firstName = newName;
    }

    console.log(firstName);
    const sayHello = function () {
        return "Hello " + firstName;
    }
    return {
        sayHello: sayHello,
        getName: getFirstName,
        setName: setFirstName
    }
})();

console.log(module.sayHello());
module.setName("John");
console.log(module.getName());
console.log(module.sayHello());
console.log(window.firstName);
