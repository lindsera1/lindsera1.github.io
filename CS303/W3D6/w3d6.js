function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

//then

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit2.eats); //true

//then

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit3.eats); // false

//then

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete rabbit4.eats;

console.log(rabbit4.eats); // true

//then

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit5.eats); // undefined

//Native prototypes, add f.defer method

function f() {
    console.log("Hello!");
  }

Function.prototype.defer = function (ms){
    return setTimeout(this, ms);
}
  
f.defer(1000); // shows "Hello!" after 1 second

//add decorating defer to function

function g(a,b){
    console.log(a+b);
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }  
}

g.defer(1000)(1,3);

//Difference between calls

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let rabbit6 = new Rabbit("Rabbit");

  //Same thing?

rabbit6.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit6).sayHi();
rabbit6.__proto__.sayHi();

//No, the last three are refering to the prototype of the rabbit object,
//not the rabbit object itself.

//Teacher Object

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`);
}

let you = new Teacher();
you.initialize("Dr. Levi", 30);
you.teach("Object Oriented Programming in Javascript");