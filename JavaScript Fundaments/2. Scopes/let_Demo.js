if (true) {
    let x = 10;
    console.log(x);
}

function fun() {
    // console.log(y); // cannot be accessed before declared
    let y = 8;
    console.log(y);
}

// console.log(z); // error: Cannot access 'z' before initialization

fun();
// console.log(x); // will not work as let have only block level of scope

let z = 99;
fun();
console.log(z);