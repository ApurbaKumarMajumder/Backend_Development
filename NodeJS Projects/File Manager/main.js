const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);
console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];

switch (command) {
	case "tree":
		treeFn(inputArr[1]);
		break;
	case "organize":
		organizeFn(inputArr[1]);
		break;
	case "help":
		helpFn();
		break;

	default:
		console.log("Please give a valid input");
}

function treeFn(dirPath) {}

function organizeFn(dirPath) {
	console.log("organize command implemented for ", dirPath);

	// 1. input -> directory path given

    let destPath;

	if (dirPath == undefined) {
		console.log("Kindly enter the path");
		return;
	} else {
		let doesExist = fs.existsSync(dirPath);
		if (doesExist) {
			// 2. create -> organized_files -> directory
			destPath = path.join(dirPath, "organized_files");

			// if organized_files is not present then create one for us
			if (fs.existsSync(destPath) == false) {
				fs.mkdirSync(destPath);
			}
		} else {
			console.log("Kindly enter the path");
			return;
		}
	}

	organizeHelper(dirPath, destPath);

	// 4. copy / cut files to that organized directory inside of any of category folder.
}

function organizeHelper(dirPath, destPath) {
    
    // 3. identify categories of all the files preesent in that input directory

    let childNames = fs.readdirSync(src);
    console.log(childNames);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            console.log(childNames[i]);
        }
    }
};

// help implemented
function helpFn() {
	console.log(`
List of All the commands:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help
    `);
}
