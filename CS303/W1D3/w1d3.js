let prompt = require("prompt-sync")();

//Hello, Object

const user = {}

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;

//Check for object emptiness

function isEmpty(object){
    for(let key in object){
        return false;
    }
    return true;
}

//Sum Object Properties

let salaries = {
    John:100,
    Ann:160,
    Pete:130
}

function sumObjectProperties(object){
    let sum = 0;
    for(let key in object){
        sum += object[key];
    }
    return sum;
    return 0;
}

const total = sumObjectProperties(salaries);

console.log(total);

//Multiply numeric properties by 2

let menu ={
    width: 200,
    height: 300,
    title: "My menu"

};

function multiplyNumeric(object){
    for(let key in object){
        if (typeof(object[key]) === "number"){
            object[key] *= 2;
        }
    }
    return object;
}

let newObject = multiplyNumeric(menu);

console.log(newObject);

//Using "this" in object literal.

//An error while show undefined, because "this" only has value at the moment 
//it is called, and can't be assigned as a function.

//Create a calculator

let calculator = {

    read: function(){

        calculator.input1 = +prompt("Enter a number: ");
        calculator.input2 = +prompt("Enter a number: ")

    },
    sum: function(){
        return this.input1 + this.input2;
    },
    mult: function(){
        return this.input1 * this.input2;
    }
}

calculator.read();

console.log(`The sum is ${calculator.sum()} and the product is ${calculator.mult()}`);

//Chaining Object Methods

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      return this.step;
      
    }
  }

  console.log(`You have stepped: ${ladder.up().up().down().showStep()} times`);

  //Two functions one object

  //It is possible


//Create new calculator

function Calculator(){
    this.read = function() {
        this.input1 = +prompt("Enter a number: ");
        this.input2 = +prompt("Enter a number: ");
    },

    this.sum = function() {
        return this.input1 + this.input2;
    },
    this.mult = function() {
        return this.input1 * this.input2;
    };
}

let newCalculator = new Calculator();

newCalculator.read();

console.log(`The sum is ${newCalculator.sum()} and the product is ${newCalculator.mult()}`);


//New Accumulator

function Accumulator(startingValue) {
    
    this.value = startingValue,
    
    this.read = function(){
        this.input = +prompt("Enter a number: ");
        this.value += this.input;
        return this.value;
    }
}

let newAccumulator = new Accumulator(3);

newAccumulator.read();
newAccumulator.read();

console.log(`The total value is ${newAccumulator.value}`);






