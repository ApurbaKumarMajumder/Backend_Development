let inputArr = process.argv.slice(2);
console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];

switch (command) {
    case "tree":
        break;
    case "organize":
        break;
    case "help":
        break;
    
    default:
        console.log("Please give a valid input");
}

function helpFn() {
    console.log(`
List of All the commands:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help
    `);
}

helpFn();