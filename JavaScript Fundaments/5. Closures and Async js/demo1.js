function todo(task) {
    console.log("Start of todo");
    setTimeout(function fun() {
        console.log("Completed", task);
    }, 2000);
    console.log("todo completed");
}

console.log("Starting");
todo("assignments");
console.log("Ending");