var args=process.argv.slice(2);
var fs = require('fs');
var file="archive/"+args[0];

//USE readFile Explicitely:
fs.readFile(file, function(error,data){
  if(error){
    return console.error(error);
  }
  console.log("This is the content of the file: "+file);
  //console.log(data);
  console.log(data.toString());
});
