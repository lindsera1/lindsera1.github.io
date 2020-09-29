 let prompt = require("prompt-sync")();
 
 /*Constructor, keyword New*/

 //Two functions, one object

/*Is it possible to create functions A and B such as new A()==new B()?

Yes, if these functions return the same object that is externally defined, 
then we can let a = A() and b = B() and a == b would yield true.*/

//Create new calculator

function Calculator(){

    this.read = function(){
        this.input1 = parseInt(prompt("Please enter the first number: "));
        this.input2 = parseInt(prompt("Please enter the second number: "));
    };
    this.sum = function(){return this.input1 + this.input2};
    this.mult = function(){return this.input1 * this.input2};
}

let calculator = new Calculator();

calculator.read();

console.log(calculator.mult());

console.log(calculator.sum());

//*Create New Accumulator */

function Accumulator(startingValue){
    
    this.value = startingValue;
    
    this.read = function(){
        this.userInput = parseInt(prompt("Please enter a number: "));
        this.value = this.value + this.userInput;
    }
}

let accumulator = new Accumulator(32);

accumulator.read();
accumulator.read();

console.log(accumulator.value);

/*End of Objects*/

/*Array Methods/

//Translate border-left-width to borderLeftWidth*/

function camelize(str){
    let words = str.split("-");
    for(let i = 0; i < words.length; i++){
        if(i>0){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        
    }
    let newWords = words.join("");
    return newWords;
}

console.log(camelize("how-are-you-today"));

//Filter Range

function filterRange(arr,a,b){
    let filtered = [];
    for(let num of arr){
        if(a<= num && num <= b){
            filtered.push(num);
        }
    }
    return filtered;
}

console.log(filterRange([1,2,3,4,5,6,7,8],2,5));

//Filter Range in Place

function filterRangeInPlace(arr1,a,b){
    
    for(let i = 0; i<arr1.length; i++) {
        let value = arr1[i];

        if(a > value || value > b){
            arr1.splice(i,1);
            i--;
        }
    }
    return arr1;
}

console.log(filterRangeInPlace([1,2,3,4,5,6,7,8],3,6));

//Sort in decreasing order

let arr2 = [5,2,1,-10,8];

arr2.sort((a, b) => b - a);

console.log(arr2);

//Copy and sort array

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr3) {
    return arr3.slice().sort();
}

let sorted = copySorted(arr3);

console.log(sorted);

//Extendable calculator


