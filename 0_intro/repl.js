
//REPL: A read–eval–print loop feature of the command line or terminal.

/*DOS - Disc Operating System: Commands*/
CMD //(can be used via Windows Search or via File Explorer )
node

dir - list directory (folder)
cd - change directory (folder)
cls - clear screen
Ctrl+C - After running a node file, breaks you out (stop script).
cd ../ -Go back a directory


/*making (start) files*/

echo .>app.js
echo test>app2.js
echo console.log('test');>app3.js

/*NODE REPL Commands*/
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

/*NODE Nodes*/

//Can do math:
1 + (2*3) -4
//Has Memory:
x=10;
y=10;
x+y;

//Milti-line program:
x=0;
do{
  x++;
  console.log("x:"+x);
}while(x<5);

//Underscore (assigment):
x=10;
y=20;
x+y;
var sum=_
console.log(sum);

/*Objects*/
apple={};
apple.color="red";
apple.color
