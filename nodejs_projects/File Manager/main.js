let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let types = {
	media: ["mp4", "mkv", "png", "jpeg"],
	archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
	documents: [
		"docx",
		"doc",
		"pdf",
		"xlsx",
		"xls",
		"odt",
		"ods",
		"odp",
		"odg",
		"odf",
		"txt",
		"ps",
		"tex",
	],
	app: ["exe", "dmg", "pkg", "deb"],
};

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];

switch (command) {
	case "tree":
		treeObj.treeKey(inputArr[1]);
		break;
	case "organize":
		organizeObj.organizeKey(inputArr[1]);
		break;
	case "help":
		helpObj.helpKey();
		break;

	default:
		console.log("Please give a valid input");
}
