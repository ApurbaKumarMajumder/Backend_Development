function fun() {
    let name = "Harshit";

    function callback(paras) {
        console.log(college);
        console.log(name);
    }

    return callback;
}

let x = fun();
x();
var college = "IIT Delhi";
x();