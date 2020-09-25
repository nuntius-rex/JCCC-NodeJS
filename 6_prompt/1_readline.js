
/*
Note: unlike stdin, does not work after question is answered.
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you want? ', function(answer){
  console.log(`Thank you for you valuable feedback: ${answer}`);

  if(answer=='quit'){
    rl.close();
  }
});
