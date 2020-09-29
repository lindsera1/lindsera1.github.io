//Destructuring Assignments

//Destructuring assignment

let user = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user;

  //A maximal salary

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  //Date and time

//create a new date

let d1 = new Date(2012, 1, 20, 3, 12);
console.log( d1 );

//Show a weekday

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); 
  console.log(getWeekDay(date)); 

//European Weekday

function getLocalDay(date1) {

    let day1 = date1.getDay();
  
    if (day1 == 0) { // weekday 0 (sunday) is 7 in european
      day1 = 7;
    }
  
    return day1;
}

//Which day of the month was many days ago?

let date2 = new Date(2015, 0, 2);

console.log(getDateAgo(date2, 1)); 
console.log(getDateAgo(date2, 2)); 
console.log(getDateAgo(date2, 365));

//Seconds that have passed today

function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }
  
  console.log(getSecondsToday());

  //Turn the object into JSON and back.

  let user1 = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user1));

  