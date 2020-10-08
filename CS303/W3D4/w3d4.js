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
  askPassword()
  askPassword()
  //Partial application for login

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user,true), user.login.bind(user, false)); // ?