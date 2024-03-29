// arithmetic operators
console.log(10 + 2); // addition
console.log(10 - 2); // subtraction
console.log(10 * 2); // multiplication
console.log(10 / 2); // division
console.log(10 % 2); // remainder

// Note if we want to have floor divisions
// 1 way -> parseint(5/2);
// 2 way -> Math.floor(5/2);

// assignment operators
let x = 10; // assigning the value 10 to the variable x
x += 2;
x -= 2;
x *= 2;
x /= 2;
x %= 2;

// logical operator
console.log((10 > 5) && (7 < 6));
console.log((10 > 5) || (7 < 6));
console.log(4 && 0); // 0
console.log(4 || 0); // 4
console.log(0 && 4); // 0
console.log(0 || 4); // 4
console.log(-4 || 5); // -4
console.log(3 && 4); // 4
console.log(3 || 4); // 3

// Bitwise Operators
console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);

// String concatenation
console.log("Sanket" + " node");

console.log(5 + 5 + "5" + 5 + 5);

console.log((2 > 1) ? "sanket" : "singh");

let y = (2 < 1) ? "sanket" : null;
console.log(y);

console.log(3 ** 4);

// Unary Operator

// x++    x--

let z = 10;
let c = z++;

console.log(z, c);
