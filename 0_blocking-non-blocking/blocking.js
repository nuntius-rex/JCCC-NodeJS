fs=require("fs");
var contents=fs.readFileSync("readme.txt");
console.log(contents);
console.log("Do something else afterwards.");
