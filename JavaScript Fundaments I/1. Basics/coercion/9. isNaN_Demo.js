let a = "10";
let b = "abc";
let c = "sanket";
let d = 10 - c;

console.log(a, b, c, d);

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

// let x = 0 / 0;
// // console.log((typeof(d) == 'number' && isNaN(d)) ? "NaN value" : "Not NaN value");
// console.log(x);
// console.log((typeof(x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");

let y = {valueOf() {return 6;}};
console.log(y);
console.log((typeof(y) == 'number' && isNaN(y)) ? "NaN value" : "Not NaN value");

let x = "";
console.log(x);
console.log((typeof(x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");