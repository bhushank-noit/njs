const arr = [1, 4, 3, 8, 23, 5];

function double(x) {
  return x * 2;
}

let o1 = arr.map(double);
let o2 = arr.map(function tripple(x) {
  return x * 3;
});
let o3 = arr.map((x) => x.toString(2)); // if single line return only use this
console.log(o1, o2, o3);

function isODD(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}

let o4 = arr.filter(isODD);
let o5 = arr.filter(isEven);
console.log(o4, o5);
