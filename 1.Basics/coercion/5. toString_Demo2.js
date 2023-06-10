console.log("Sanket" + {"a": 10});
/**
 * "Sanket" -> is already a primitive
 * {"a": 10} -> is not a primitive, so, we call toPrimitive without a hint, means hint -> number
 * we first call valueOf on  {"a": 10} -> and it returns same object
 * we call toString -> toString will return '[object Object]' which is a string i.e. primitive
 * "Sanket" + "[object Object]" -> "Sanket[object Object]"
*/

console.log(10 - {"a": 45});
/**
 * 10 is already a number
 *  {"a": 10} is going to get converted ToNumber, and this is an object.
 * for object we call ToPrimitive with hint Number.
 * first we call valueOf -> it returns the same object ->  {"a": 10}
 * then we call toString -> it return '[object Object]' which is primitive
 * so call ToNumber on '[object Object]' again which gives NaN
 * 10 - NaN = NaN
*/

let x = {"b": 90, valueOf() {return 2;}, toString() {return "custom";}}
console.log(x - 10);
/**
 * x is an object, we need to pass x to ToPrimitive with hint Number
 * we call valueOf -> it return 2; which is a primitive
 * x becomes 2, 10 is already a number
 * 2 - 10 = -8 
*/

console.log(x + "Sanket"); // 2Sanket
// console.log("Sanket" + {"a": 90, valueOf() {return {}}, toString() {return {}}}); // this will through error

console.log({} + "hello"); // in some systems it showed NaN
console.log("hello" + {});