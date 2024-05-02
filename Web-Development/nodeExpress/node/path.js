const path = require("path");

const filePath = path.join("/content","node","text1.txt");
const base = path.basename(filePath);
const absolutePath = path.resolve(__dirname,"content","node","text1.txt");

//console.log("filePath:",filePath);
//console.log("base:",base);
//console.log("absolute path:",absolutePath);

