// advantages of closure
// curring
// settimeout
// data hiding and encapsulation  eg

function counter() {
  var count = 0;
  function incrementCounter() {
    console.log("counter", ++count);
  }
  return incrementCounter;
}
let counter_1 = counter();
counter_1();
counter_1();
counter_1();

let counter_2 = counter(); // get new counter variable for it but consumes more
counter_2();

// to add more scalable this function for increament and decrement

function CountVar() {
  let count = 0;
  this.incrementCounter = function () {
    console.log("this.counter", ++count);
  };
  this.decrementCounter = function () {
    console.log("this.counter", --count);
  };
}
let c1 = new CountVar();
let c2 = new CountVar();

c1.incrementCounter();
c1.incrementCounter();
c1.decrementCounter();
c2.incrementCounter();

// read about garbage collection with closure , free un utilize memory
