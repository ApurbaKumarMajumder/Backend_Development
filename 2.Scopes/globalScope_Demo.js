var name = "Sanket"; // this is a global variable

function greet() {
    console.log('greetings !', name);

    function test() {
        console.log("test");
    }
}

function fun() {
    console.log("have fun! ", name);
}

greet();
fun();