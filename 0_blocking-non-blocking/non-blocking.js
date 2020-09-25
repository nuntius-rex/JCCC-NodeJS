
fs =require("fs");
fs.readFile("readme.txt", function(err, contents){
  console.log(contents);
})
console.log("I was called last. I'm finished");
