// CommonJS module:
var fs = require('fs');


let fileSysMod={
  name: "File System Module",
  createFile: function(file){
    fs.writeFile("./archive/"+file,"",function(error){
      if(error){
        console.log(error);
      }
      console.log(`The file, ${newFile} was created.`);
    });
  },
  readFile:function(file){
    fs.readFile("./archive/"+file, function(error,data){
      if(error){
        console.log(error);
      }
      console.log("This is the content of the file: "+file);
      //console.log(data);
      console.log(data.toString());
    });
  },
  updateFile:function(file,appendText){
    console.log(file);
    console.log(appendText);
    fs.appendFile("./archive/"+file,appendText,function(error){
      if(error){
        console.log(error);
      }
      console.log("The file, "+file+" was successfully appended.");
    });
  },
  deleteFile:function(file){
    fs.unlink("./archive/"+file, function(error){
        if(error){
          return  console.log(error);
        }
        console.log("File "+file+" deleted successfully.");
    });
  },
  help:function(){
    let helpText=`
      Please specify a command:
      help - view this screen
      create <filename> - create a file
      read <filename> - read a file
      update <filename> <text> - update a file
      delete <filename> - delete a file
    `;
    console.log(helpText);
  }

}

module.exports=fileSysMod;
