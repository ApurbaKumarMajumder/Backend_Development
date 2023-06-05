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

// break -> whenever we hit break, we came out of the nearest loop possible.


