/*jshint esversion: 6 */


window.onload = function () {
    "use Strict";
    // alert("Hello, world!");
    let setT = document.getElementById("big").onclick = function(){

        let textArea = document.getElementById("txtID");
        let len = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
        let fontSize = parseInt(len);
        textArea.style.fontSize = (fontSize + 2) + "pt";
        setInterval(setT, 500);
    };

    const checkBtn = document.getElementById("checked");
    checkBtn.onchange = function () {
        if(checkBtn.checked){
            document.getElementById("txtID").className = "bling";
            document.body.style.backgroundRepeat = "repeat";
            document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        }
        else {
            document.getElementById("txtID").className = "normal";
            document.body.style.backgroundImage = "url()";
        }
    };

    let btn = document.getElementById("igpay");


    // test here
    // translatePigLatin("consonant");
    btn.onclick = translatePigLatin;

    let btnMalkovitch = document.getElementById("MalkovitchID").onclick = findLongestWord;
};

function translatePigLatin() {
    let text = document.getElementById("textField");
    let str = text.value;
    // let textOutput = document.getElementById("textOutput");
    // Create variables to be used
    let pigLatin = "";
    let regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str.match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
    } else {
        // Find how many consonants before the first vowel.
        let vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
    console.log(pigLatin);
    text.value = pigLatin;
    // return pigLatin;
}
function findLongestWord() {
    let wordsArray = document.getElementById("MalkovitchField");
    let replaceWord = "Malkovitch";
    let len = 5;
    let arrayWords = wordsArray.value.split(" ");
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length >= len) {
            arrayWords[i] = replaceWord;

        }
    }
    wordsArray.value = arrayWords.toString();

}