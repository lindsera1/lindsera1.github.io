let prompt = require("prompt-sync")();

let animal1 = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal1,
    jumps: true
  };
  
  console.log(rabbit.jumps); // true (1)
  
  delete rabbit.jumps;
  
  console.log(rabbit.jumps); // null (2)
  
  delete animal1.jumps;
  
  console.log(rabbit.jumps); // undefined (3)

  //Searching Algorithm

  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  //Where does it write?

  let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit1 = {
    __proto__: animal
  };
  
  rabbit1.eat();

  //this refers to the object before the dot, so the rabbit
  //inherits the full property

  //Two hamsters full

  let hamster = {
    
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
      stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
      stomach: [],
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log(speedy.stomach); // apple
  
  // This one also has it, why? fix please.
  console.log(lazy.stomach); // apple


  //Objects, constructor, operator "new"

  //Two functions, one object?

let obj = {};

function A() {return obj;}
function B() {return obj;}

let a = new A;
let b = new B;

console.log(a == b); 

//New Calculator

function Calculator(){
    this.read = function(){
        this.input1 = +prompt("Enter number 1: ");
        this.input2 = +prompt("Enter number 2: ");
    }
    this.sum = function(input1,input2) {return this.input1 + this.input2};
    this.mul = function(input1,input2) {return this.input1 * this.input2};
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

//Create new accumulator

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Enter a number: ");
        return this.value;
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 
console.log(accumulator.value); 



