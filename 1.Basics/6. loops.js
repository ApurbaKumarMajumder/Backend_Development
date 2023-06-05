// while loop
x = 0;
while (x < 3) {
    console.log(x);
    x++;
}

// for loop
for (let index = 0; index < 5; index++) {
    console.log(index);
}

// break, pass and continue
console.log("More on loops");

console.log("Break in loops");

for (let i = 1; i < 20; i++) {
    if (i % 7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(i);
}

// 1. break -> whenever we hit break, we came out of the nearest loop possible.

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; true; j++) {
        str += "*";
        if (j == i) {
            break;
        }
    }
    console.log(str);
}

// 2. continue -> when we hit continue, we again move to the nearest loop for execution.

for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}