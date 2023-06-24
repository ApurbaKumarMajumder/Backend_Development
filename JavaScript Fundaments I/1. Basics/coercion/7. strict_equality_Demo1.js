// if any one of the argument in NaN, it returns false
console.log(NaN === NaN); // false
console.log(NaN === 23); // false
console.log(33 === 33); // true
console.log(33 === 23); // false
console.log(0 === -0); // true
console.log(-0 === 0); // true
console.log(undefined === undefined); // true
console.log(undefined === 23); // false
console.log(null === null); // true
console.log("Sanket" === "Sanket"); // true
console.log({} === {}); // false
let x = {};
console.log(x === x); // true
console.log(Symbol('sanket') === Symbol(('sanket'))); // false
let y = Symbol('sanket');
console.log(y === y); // true