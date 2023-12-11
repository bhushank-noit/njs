console.log(a); // will print undefined, in this case of variable, memory reserved for this variable in global execution context not assigned value yet
// console.log(b); // gives not defined error, will stops execution of program, memory with b is not reserved for this variable in global execution context
var a = 4;
console.log(getName);
console.log(getValue); // will print undefined, in this case of variable, memory reserved for this variable in global execution context not assigned value yet
function getName() {
  console.log("getName with simple function definition");
}
var getValue = () => {
  console.log("getValue with arrow function as variable");
};
getName();
getValue();
