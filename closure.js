function outer(c) {
  // parameter also closured
  var a = 7,
    e = 5; // e is not used so modern js engine or smart browser garbaje collected it and clear memory
  function inner() {
    console.log("innser called ", a, b, c, d);
  }
  var b = 19; // sequence doesn't matter
  let d = { a, b, c }; // let sequence also not matter
  return inner;
}

outer("Hellow world")(); // equivalent to var a = outer(); a();

let v1 = "v1";
let v2 = "v2";

function f1() {
  let v1 = "v1_2";
  function f2() {
    function f3() {
      console.log("Global variable v2", v2); // get from global if not found gives reference error
      console.log("Nested Local variable v1", v1);
    }
    return f3;
  }
  return f2();
}

var f4 = f1();
f4();

// disadvantage of closure consumes lots of memory
