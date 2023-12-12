/* {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log("{}", a, b, c);
} */

// var a = 1;
// var b = 2;
// {
//   var a = 3; // shadows above a and b because it refers in global execution context
//   var b = 4; //
//   console.log("{13}", a, b);
// }
// console.log("15", a, b);

/* let a = 1;
const b = 2;
{
  let a = 3; // const and let will print different values for each block scope bcoz separete memory for each block scope allocation
  const b = 4; //
  console.log("{22}", a, b);
}
console.log("24", a, b); */

/* let a = 1;
{
  var a = 2; // gives error because it reverse shadowing is not possible and same for const Uncaught SyntaxError: Identifier 'a' has already been declared (at index.js:28:7) this will be possible in function scope
  console.log("{29}", a);
} */

// var a = 1;
// {
//   let a = 2; // this shadowing is possible
//   console.log("{35}", a);
// }

/* let x = 1;
function y() {
  var x = 2; // this shadowing is possible
  console.log("41", x);
}
y(); */

// block scope follows lexical environment

// scope rule for function works same for arrow functions
