var args=process.argv.slice(2);
var fs=require('fs');

var file="archive/"+args[0];

fs.unlink(file, function(error){
    if(error){
      return  console.log(error);
    }

    console.log("File deleted successfully.");
});
