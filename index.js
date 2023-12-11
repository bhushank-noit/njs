var ab = 5;
function a() {
  var ab = 15;
  console.log(ab);
}
function b() {
  var ab = 25;
  console.log(ab);
}
console.log(ab);
a();
b();
console.log(ab);
// output will be 5 15 25 5
