const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const consoleMenu=`
==========================================
My Console App: Please enter instructions
==========================================
`;

var recursiveReadline = function(){
  rl.question(consoleMenu, function(answer){
    console.log(`Thank you for you valuable feedback: ${answer}`);

    if(answer=='quit'){
      rl.close();
    }else{
      //Restart:
      recursiveReadline();
    }
  });
};
//Starter:
recursiveReadline();
