var name = "Sanket"; // this is a global variable

function greet() {
    console.log('greetings !', name);
    var x = 10; // this a function scope
    function test() { // this a function scope
        console.log("test");
    }
    test();
    console.log(x);
}

function fun() {
    console.log("have fun! ", name);
}

greet();
fun();