//Rewrite Using ? 

function checkAge(){
    return age > 18 ? true : confirm("Did your parents allow you?");
}

//Using ||

function checkAge(){
    return age > 18 || confirm("Did parents allow you?");
}

//Function min(a,b)

function min(a,b){
    let smallest = a;

    if (b < smallest){
        smallest = b;
    }

    return smallest;
}

//function pow(x,n)

function pow(x,n){
    return x**n;
}

//rewrite to arrow functions

() => alert("You agreed");

() => alert("You canceled the execution");

//Is array copied?

let fruits = ["Apples", "Pear", "Orange"];


let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length );

//*fruits.length will equal 4

//Array operations

let styles = ["Jazz","Blues"]

styles.push("Rock-n-Roll")

styles[Math.floor((styles.length-1)/2)] = "Classics";

console.log(styles.shift());

styles.unshift("Rap","Reggae");

//Calling in an Array Context

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]() === function(){alert(this)};

//Sum input numbers

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
console.log(sumInput());

//Maximal sum subarray

function getMaxSubSum(arr) {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }

  //MaxOfThree

  function maxofThree(a,b,c){
    let largest = a;

    if(b>largest){
        largest = b;
    }
    if(c>largest){
        largest = c;
    }
    return largest;
  }

  //sum() and multiply()

  let sum = arr.reduce(accumulator,n => accumulator + n);

  let multiply = arr.reduce(accumulator, n => accumulator*n);

  //Find longest word

function findLongestWord(arr){
    let length = 0;

    for(let word of arr){
        if (word.length > length){
            length = word.length;
        }
    }
    return length;
}

//Reverse an array

let reverseArray = function(arr){
    let output = []
    for(let i = arr.length-1; i>0;i--){
        output.push(arr[i]);
    }
    return output;
}

function reverseArrayInPlace (array) {
    var i = 0,
        n = array.length,
        middle = Math.floor(n / 2),
        temp = null;
  
    for (; i < middle; i +=1) {
       temp = array[i];
       array[i] = array[n - 1 - i];
       array[n - 1 - i] = temp;
    }
  }

  
  
