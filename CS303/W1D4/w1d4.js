let prompt = require("prompt-sync")();

//Add a string property?

//No you cannot

//Sum numbers from the visitor

let a = +prompt("Please enter a number: ");
let b = +prompt("Please enter a number: ");

console.log(a+b);

//Repeat unti] input is number

function readNumber(){
    let number;
    do{
        num = prompt("Enter a number: ")
    } while( !isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

let result = readNumber();

console.log(result);

//Occasional infinite loop

//Because of precision loss when dealing with fractional numbers

//a random number from min to max

function randomInteger(min,max){
    let rand = min + Math.random()*(max + 1 - min);
    return Math.floor(rand);
}

let random = randomInteger(3,10);

console.log(random);

//Uppercase the first character

function ucFirst(str){
    let letters = str.split("");
    for(let i = 0; i<letters.length;i++){
        letters[i] = letters[i].toUpperCase();
        break;
    }
    return letters.join("");
}

console.log(ucFirst("john"));

//Check for spam

function checkSpam(str){
    let newStr = str.toLowerCase();
    if(newStr.includes("viagra") || newStr.includes("xxx")){
        return true;
    } else {
        return false;
    }
}

let spam = checkSpam("buy ViAgRA now");

console.log(spam);

//Truncate the text

function truncate(str,maxlength){
    let newString = str.split("");
    if(newString.length > maxlength){
        newString.splice(maxlength-1,(newString.length-1)-(maxlength-1),"...");
    }

    return newString.join("");
}

let New = truncate("How are you doing today?",13);

console.log(New);

//