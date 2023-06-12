/*
{
    var x = 10;
    console.log(x);
}

console.log(x); // this will work as var x is inside a block so x is a global variable right now.
*/

function fun() {
    console.log(x); // why we get undefined? -> lexical scoping
    var x = 10;
    console.log(x);
}

{
    var y = 100; // this will becomes global due to var
}

fun();
console.log(y);

if (true) {
    var z = 30;
}

if (false) {
    var a = 20;
}

console.log(z);
console.log(a);
// console.log(x);