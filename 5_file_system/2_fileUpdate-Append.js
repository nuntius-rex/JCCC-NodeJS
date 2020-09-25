var args=process.argv.slice(2);
var fs=require('fs');
if(args.length==0){
  console.log("Please add a file name parameter to your request." );
}
if(args.length!=2){
  return console.log("Sorry, you must have exactly two arguments.");
}

var newFile="archive/"+args[0];
var appendText=args[1]+"\n";

fs.appendFile(newFile,appendText,function(error){
  if(error){
    return  console.log(error);
  }
  console.log("The file, "+newFile+" was successfully appended.");
});
