console.log(12 - 4); // both of them are already a number, so we just subtract.
console.log(undefined - 3);
/**
 * undefined is not a valid number, to we make it undergo ToNumber abstract operation.
 * ToNumber(underfined) -> NaN
 * NaN - 3 -> and for any number when you do any operation with NaN it results in NaN
 * NaN - 3 -> NaN
*/
console.log(null - 5);
/**
 * null is not a valid number, so we make it undergo ToNumber abstract operation.
 * ToNumber(null) -> +0
 * +0 - 5 -> -5
*/
console.log("132" - 10);
/**
 *  
*/