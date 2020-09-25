process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data',function(text){
  console.log('recieved data:', util.inspect(text));
  if(text=='quit\n' || text=='quit\r\n'){
    done()
  }

  function done(){
    console.log('Ending process');
    process.exit();
  }

});
