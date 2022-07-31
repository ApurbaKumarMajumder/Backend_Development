const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let types = {
    media: ["mp4", "mkv", "png", "jpeg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

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
}

function organizeHelper(src, dest) {
    
    // 3. identify categories of all the files preesent in that input directory

    let childNames = fs.readdirSync(src);
    // console.log(childNames);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            // console.log(childNames[i], "belongs to --> ", category);
            sendFiles(childAddress, dest, category);
        }
    }
};

function sendFiles(srcFilePath, dest, category) {
    
    // first create all the categories in the organized_files folder
    let categoryPath = path.join(dest, category);

    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);

    for (let type in types) {
        let currentArrayType = types[type];

        for (let i = 0; i < currentArrayType.length; i++) {
            if (ext == currentArrayType[i]) {
                return type; // return archive, app and others
            }
        }
    }

    return "others";
}

// help implemented
function helpFn() {
	console.log(`
List of All the commands:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help
    `);
}