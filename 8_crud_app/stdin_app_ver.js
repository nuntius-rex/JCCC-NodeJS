process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
const fileSysMod=require('./lib/fileSysMod');

process.stdin.on('data',function(text){
    //console.log('recieved data:', util.inspect(text));
    var args=text.split(" ");
    //console.log("args:"+args);
    var command=args[0];
    var fileName=args[1].trim();


    //Test Args:
    switch(command){
      case "c":
      case "create":
        var result=fileSysMod.createFile(fileName);
        console.log(result);
      break;
      case "read":

      break;
      default:
        //default
    }


    if(text=='quit\n' || text=='quit\r\n'){
      done()
    }

    function done(){
      console.log('Ending process');
      process.exit();
    }

});
