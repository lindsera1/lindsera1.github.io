//Does a function pickup latest changes?

//The answer will show Pete, because the compiler establishes the 
//most recent values for the functions lexical environment.

//Which variables are available?

//The function call, work(), will  log Pete, because the lexical 
//environment is first established then the code executes what it
//has closed off, in this case, let name = "pete".

//Are counters independent?

//Counter and counter2 are created with their own lexical environments,
//so they each have their own counters.

//Counter Object

//The counter will show 1,2,1, because both functions were created 
//in the same lexical environment, so both have access to the count
//variable.

//Function in if

//SayHi cannot be called outside of the if block, which has its
//own unique environment. It will yield an error if it is.

//Filter through function

let arr1 = [1,2,3,4,5,6,7,8];

arr1.filter(inBetween(2,7));

function inBetween(a,b){
    return function isBetween(num){
        if(num >= a && b >= num){
            return true;
        } else {
            return false;
        }
    }
}

function inArray(arr){
    return function isIn(num){
        if(arr.includes(num)){
            return true;
        } else {
            return false;
        }
    }
}

console.log(arr1.filter(inBetween(2,7)));

//Sort by field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
    return (a,b) => a[field] > b[field] ? 1 : -1;
}

console.log(users.sort(byField("name")));

//Army of Functions

//Every iteration of the while loop creates a new lexical
//environment, so the function needs closure on a variable within
//that context. To do this, we just need to copy i into j within
//the while loop.

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // shooter function
          console.log( j ); // should show its number
        };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();

  console.log(army[1]());

  //sum with closures

  function sum(a) {

    return function(b) {
      return a + b; 
    };
  }

  console.log(sum(4)(9));

  //Is Variable Visible?

  //No, it will yield an error