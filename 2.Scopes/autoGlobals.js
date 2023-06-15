var teacher = "Sanket";

function fun() {
    var teacher = "Pulkit";
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Vibhav"; // eligible to be autoglobal
}

function gun() {
    console.log(subject);
    var subject = "JS";
    console.log(teacher);
}

console.log(teacher);
fun();