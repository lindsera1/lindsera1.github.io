//SetInterval version

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
}

console.log(printNumbers(3,10));

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  console.log(printNumbers(5, 10));

  //What will timeout show?

  //The code will only execute after it has finished running,
  //regardless of the setTimeout.