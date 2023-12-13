a(); // regular works here
// b(); // gives error message that b is not a function

// 1) function statement also known as function declaration
function a() {
  console.log("function a called");
}

// 2) function expression
var b = function c() {
  console.log("function b(c) called");
};

a(); //
b();
// c(); // gives index.js:16 Uncaught ReferenceError: c is not defined because it is not in outer scope or global scope

// 3) both 1&2 is used to create function  but difference is in hoisting because b is a variable

/* function (){
  // anonymous function => this will give error should have name and cant 
  use Uncaught SyntaxError: Function statements require a function name (at index.js:19:1)
}
 */

var d = function () {
  console.log("anonymous function called with function expression");
};
d();

function e(param1, param2) {
  // this is parameter and local access
  console.log("param1: " + param1 + " param2: " + param2);
}
var arg1 = "arg1";
var arg2 = "arg1";
e(arg1, arg2); // this is argument

// first class function means ability to send as argument or return or use as variable (not in JS, in other language also)

// let and const is used as same above var but difference is in hoisting because let and const can be used after initialization
