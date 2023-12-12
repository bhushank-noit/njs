/* function a() {
  var b = 7;
  return function c() {
    console.log(b);
  };
}
var d = a(); // a execution context gone after it
console.log(d);
d(); // this will print because function c/d returns with closure;

function x() {
  var y = 7;
  function z() {
    console.log(y);
  }
  y = 25;
  return z;
}
var e = x(); // a execution context gone after it
console.log(e);
e(); // this will print 25 because y points/refer to memory not to 7/25 */

function a() {
  let b = 17;
  function c() {
    function d() {
      function e() {
        console.log(b);
      }
      e();
    }
    d();
  }
  c();
}
a();
