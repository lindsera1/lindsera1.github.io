function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  askPassword(function(){return user.loginOK()},function(){user.loginFail()})
  askPassword(function(){user.login.call(user)},function(){user.login.call(user)});
  askPassword(function(){user.login.apply(user)},function(){user.login.apply(user)});
  //Partial application for login

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user1 = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user1.login.bind(user1,true), user1.login.bind(user1, false)); // ?

  //Exam2 Redo Questions

  //Arrow functions are best characterized as function expressions, 
  //not declarations

  //Consider the following code. What appears?

  "use strict"
  function perimeter(){
    console.log(this);
    return 4 * this.side;
  }
  const shape = {side: 5, perimeter: perimeter};
  shape.perimeter()

  //The Shape object

  //Recall the makeCounter function. Write a similar function with a 
  //closure, makeAccount() to keep track of an account balance

  function makeAccount(){
    let balance = 0;
    return function(transation,amount){
      if(transation === "add"){
          balance += amount;
          return balance;
      }
      if(transaction === "debit"){
          balance -= amount;
          return balance;
      }
    }
  }

  let account1 = makeAccount();
  console.log(account1("add",1000));

  /*Write a function tenClock() that will show the time for 10 seconds. 
  We will want this 10 second timer to display on a web page eventually, 
  but for now log the current time to the console every second. It 
  should show the current time in hh:mm:ss format. Recall the Date 
  object and methods getHours,getMinutes, getSeconds.*/

  function tenClock(){
    function now(){
      let now = new Date();
      console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    }
    let timer = setInterval(now, 1000);
    function stop_Interval(){
      clearInterval(timer);
    }
    setTimeout(stop_Interval, 12000);
    console.log(timer);
  }

  tenClock();