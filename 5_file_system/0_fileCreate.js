
//Taking input:
var args=process.argv.slice(2);
console.log(args);


var fs=require('fs');

if(args.length==0){
  console.log("Please add a file name parameter to your request." );
}
var newFile="archive/"+args[0];
//console.log(newFile);

fs.writeFile(newFile,"",function(error){
  if(error){
    return  console.log(error);
  }
  console.log("The file, "+newFile+" was created.");
});
