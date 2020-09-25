var args=process.argv.slice(2);
var fs=require('fs');

var path = require('path');
var scriptName = path.basename(__filename);
var scriptLocation=process.argv[1];
//console.log("scriptName: "+scriptName);

if(args.length==0){
  args[0]=scriptLocation.replace(scriptName,"archive");
  console.log("Defaulting to archive folder...");
}
//console.log(args);

console.log("Contents of folder:");
fs.readdir(args[0], function(error, files){
  if(error){
    return  console.log(error);
  }

  for(let i=0; i<files.length; i++){
    console.log(files[i]);
  }

})
