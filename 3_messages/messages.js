"use strict";

let messages=[
  "Hey, I like Node!",
  "Ironman is the best super hero!",
  "I love to code."
];

console.log("For Loop:");
//console.log(messages.length);
for(let i=0;i<messages.length;i++){
  console.log(messages[i]);
}

console.log("For Each:");
messages.forEach(function(msg){
  console.log(msg);
});

console.log("For Each (Arrow Function):");
messages.forEach(msg=> console.log(msg));
