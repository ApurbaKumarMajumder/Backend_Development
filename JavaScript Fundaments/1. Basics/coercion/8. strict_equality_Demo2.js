console.log(null == undefined); // true
console.log(undefined == null); // true
console.log(10 == '10'); // ToNumber('10') => 10, 10 == 10 -> true
console.log(10 == '12'); // ToNumber('12') => 12, 10 == 12 -> false
console.log('99' == 99); // ToNumber('99') => 99, 99 == 99 -> true
console.log(false == 0); // ToNumber(false) => 0, 0 == 0 -> true
console.log(true == 10); // ToNumber(true) => 1, 1 == 10 -> false
console.log(10 == {valueOf() {return 10}}); // ToPrimitive([valueOf() {return 10}]) -> hint:number, 10 == 10
console.log((0.3 - 0.2) === (0.2 - 0.1));

// NaN is the only primitive value in JS that doesn't follow identity property and is not equal to itself.
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
