/* setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x called");
  y();
}
x(function y() {
  console.log("y called");
});
 */

/* document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("btn clicked");
});
 */

// use closure with count get for clicked

function click() {
  let count = 1;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("btn clicked ", count++);
  });
}
click();
