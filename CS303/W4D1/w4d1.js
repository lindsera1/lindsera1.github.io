//Creating New Clock



class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

  //2.a

  class Clock1 {
    constructor({ template }) {
        this.template = template;
  
        this.render = function() {
            let date = new Date();
        
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
        
            console.log(output);
        }
    
        this.stop = function() {
            clearInterval(this.timer);
        }
    
        this.start = function() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        }
    }
}
  
  
  let clock1 = new Clock1({template: 'h:m:s'});
  clock1.start();

  //2.b

  function Clock2({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock2 = new Clock2({template: 'h:m:s'});
  clock2.start();

  //No clue

  //Class Inheritance

  //Error creating an instance

  class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  console.log(rabbit.name);

  //Extended clock

  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  class ExtendedClock extends Clock {
      constructor({options}){
          super({options});
          let {precision = 1000} = options;
          this.precision = precision;
      }
      start(){
          this.render();
          this.timer = setInterval(() => this.render, this.precision))
      }
  }

  let extendedClock = new ExtendedClock(3500);

  extendedClock.start();