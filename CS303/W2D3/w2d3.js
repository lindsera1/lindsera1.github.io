//Part 0: array method practice

const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]

//map

//double nums

console.log(numArray.map(n => n*2));

//double age

console.log(peopleArray.map(n => n.age*2));

//filter

//filter all even

console.log(numArray.filter(n => n%2 === 0));

//filter ages greater than 10

console.log(peopleArray.filter(n => n.age > 10));

//find even, include even

console.log(numArray.find(n => n%2===0));

//console.log(numArray.includes();

//find age > 10, includes age > 10

console.log(peopleArray.find(n => n.age > 10));

//console.log(peopleArray.includes();

//reduce

//find sum of numbers

console.log(numArray.reduce((total, current) => total + current, 0));

//find average of numbers

console.log((numArray.reduce((total, current) => total + current, 0))/(numArray.length))

//find max of numbers

console.log(numArray.reduce((max, next) => next > max? next: max));

//find max for ages

console.log(peopleArray.reduce((max, next) => next.age > max.age? next: max));

//average age of even ages

//console.log((peopleArray.filter(n => n.age%2 === 0)).reduce((total,current) => total + current.age)/(2));

//average age of odd ages

//console.log((peopleArray.filter(n => n.age%2 !== 0)).reduce((total,current) => total + current.age)/(2));

//Recursion and Stacks

// Sum to n

//iterative

function sumTo(n){
    let sum = 0
    for(let i = n; i > 0; i--){
        sum += i;
    }
    return sum;
}

console.log(sumTo(3));

//recursive

function sumTo(n){
    if(n===1){
        return n;
    }
    else if (n>1){
        return n + sumTo(n-1);
    }
}

console.log(sumTo(3));

//factorials

function factorial(n){
    if(n === 1){
        return n;
    }
    else {
        return n*factorial(n-1);
    }
}

console.log(factorial(9));

//fibonacci numbers

function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(77));

//single linked list

//looping


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
  
  printList(list);

//Recursive

function printList(list) {

    alert(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
  
  }
  
  printList(list);

  //reversed list, recursive

  function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  
  printReverseList(list);

// reversed list, looping

function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }
  
  printReverseList(list);

  


