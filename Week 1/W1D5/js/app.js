"use strict";
let number1;
let number2;

/*
1.	Define a function max() that takes two numbers as arguments and returns the largest of them.
    Use the if-then-else construct available in Javascript.
 */
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(`Max of 2 & 3 is: ` + max(2, 3));

/*
    2.	Define a function maxOfThree() that takes three numbers
        as arguments and returns the largest of them.
 */
function maxOfThree(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}

console.log(`MaxofThree of 2 & 3 & 4 is: ` + maxOfThree(2, 3, 4));

/*
    3.	Write a function isVowel() that takes a character (i.e. a string of length 1)
        and returns true if it is a vowel, false otherwise.
 */

// let strg = "";
function isVowel(strg) {
    if (strg.length === 1 && (strg === "a" || strg === "e" || strg === "i" || strg === "o" || strg === "u")) {
        return true;
    } else
        return false;
}

console.log(`we is vowel? ` + isVowel("a"));

/*
4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers.
    For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
 */

let sumNumbers = [];
let sumTotal = 0;
let sumMultiple = 1;

function sum(sumNumbers) {
    for (let i = 0; i < sumNumbers.length; i++) {
        sumTotal = sumTotal + sumNumbers[i];
    }
    return sumTotal;
}

console.log(`sum of sum([1,2,3,4]) is ` + sum([1, 2, 3, 4]));

function multiply(sumNumbers) {
    for (let i = 0; i < sumNumbers.length; i++) {
        sumMultiple = sumMultiple * sumNumbers[i];
    }
    return sumMultiple;
}

console.log(`Multiple of multiply([1,2,3,4]) is ` + multiply([1, 2, 3, 4]));

/*
5.	Define a function reverse() that computes the reversal of a string.
    For example, reverse("jag testar") should return the string "ratset gaj".
 */
function reverse(reverseString) {
    return reverseString.split("").reverse().join("");

}

console.log(`reverse of hello is ` + reverse("Hello"));

/*
6.	Write a function findLongestWord() that takes an array of words and
    returns the length of the longest one.
 */

function findLongestWord(wordsArray) {
    let longestWord;
    let len = 0;
    let arrayWords = wordsArray.split(" ");
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length > len) {
            longestWord = arrayWords[i];
            len = arrayWords[i].length;
        }
    }
    return longestWord;
}

console.log(`longest word is ` + findLongestWord("this is the longest word"));

/*
7.	Write a function filterLongWords() that takes an array of words and
    an integer i and returns a new array containing only those words that
    were longer than i characters.
 */

function filterLongWords(arrayWords, i) {
    let arrayOfWordsLongerThanI = [];
    arrayWords.forEach(function (item, index, array) {
        if (item.length > i) {
            arrayOfWordsLongerThanI.push(item);
        }
    });

    return arrayOfWordsLongerThanI;
}

let str = "Write a function filterLongWords() that takes an array of words and\n" +
    "    an integer i and returns a new array containing only those words that\n" +
    "    were longer than i characters.";
let arrayWords = str.split(" ");
console.log(`array of filtered words greater that 7 ` + filterLongWords(arrayWords, 7));


/*
8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates
    and returns the sum of the squares of each number in the input array.
    E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 +3^2 = 14.
    Note: Write your Javascript code without using Imperative programming.
    i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
 */

function computeSumOfSquares(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(function (item, index, array) {
        sum = sum + (item * item);
    });
    return sum;
}

console.log(`sum of the squares of [1,2,3] is ` + computeSumOfSquares([1, 2, 3]));

/*
    9.	Write a function named, printOddNumbersOnly, that takes as input,
    an array of integral numbers and it finds and prints only the numbers which are odd.
 */
function printOddNumbersOnly(arrayOfIntegralNumbers) {
    arrayOfIntegralNumbers.forEach(function (item) {
        if (item % 2 !== 0) {
            console.log(item);
        }
    });
}

printOddNumbersOnly([1, 3, 5, 7, 9, 11, 13, 15, 3, 6, 8, 15, 1284]);

/*
   10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
   and calculates and returns the sum of the squares of only the even numbers in the input array.
   E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.
 */
function computeSumOfSquaresOfEvensOnly(arrayOfIntegralNumbers) {
    let sum = 0;
    arrayOfIntegralNumbers.forEach(function (item) {
        if (item % 2 === 0) {
            sum = sum + (item * item);
        }
    });
    return sum;
}

console.log(`computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) is ` + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

/*
    11.	Using the Array.reduce(…) function, re-implement your functions, sum(…)
    and multiply(…) (defined in Problem 4 above) without using Imperative programming.
    i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
 */
function sumReduce(sumNumbers) {
    let sumTotal = sumNumbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    /*for (let i = 0; i < sumNumbers.length; i++) {
        sumTotal = sumTotal + sumNumbers[i];
    }*/
    return sumTotal;
}

const arr = [1, 2, 3, 4];
console.log(`sum of sum([1,2,3,4]) is ` + sumReduce(arr));

function multiply(sumNumbers) {
    let multipleTotal = sumNumbers.reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
    }, 1);
    /*  for (let i = 0; i < sumNumbers.length; i++) {
          sumMultiple = sumMultiple * sumNumbers[i];
      }*/
    return multipleTotal;
}

console.log(`Multiple of multiply([1,2,3,4]) is ` + multiply([1, 2, 3, 4]));

/*
12.	Implement Javascript code for a function named, findSecondBiggest,
    which takes as input, an array of numbers and finds and returns the
    second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5])
    should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12.
    (Note: Do not use sorting!)
 */
function findSecondBiggest(arrayNumbers) {
    arrayNumbers.sort(function (a, b) {
        return a - b;
    });
    return arrayNumbers[arrayNumbers.length - 2];
}

console.log(`findSecondBiggest([19,9,11,0,12]) is ` + findSecondBiggest([19, 9, 11, 0, 12]));

/*
13.	Write a function named printFibo, that takes as input, a given length, n, and any two
    starting numbers a and b, and it prints-out the Fibonacci sequence,
    e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and
    b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
    prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1",
    as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output;
    and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
 */
function printFibo(n, a, b) {
    const s = [a, b];
    if (n === 1) {
        s.push(a);
        return s;
    } else if (n === 2) {
        s.push(a, b)
        return s;

    } else if (n === 3) {
        s.push(a, b, b);
        return s;
    } else {
        while (s.length < n) {
            s.push(s[s.length - 1] + s[s.length - 2]);
        }
        return s;
    }
}

console.log(printFibo(10, 0, 1));

/*
    14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
b.	New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.

 */