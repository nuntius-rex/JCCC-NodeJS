const args=process.argv.slice(2);
const fileSysMod=require('./lib/fileSysMod');
const command=args[0];

//console.log(fileSysMod);

//Process Commands:
switch (command) {
  case "create":
    var file=args[1];
    fileSysMod.createFile(file);
  break;
  case "read":
    var file=args[1];
    fileSysMod.readFile(file);
  break;
  case "update":
    var file=args[1];
    var appendText=args[2];
    fileSysMod.updateFile(file, appendText);
  break;
  case "delete":
    var file=args[1];
    fileSysMod.deleteFile(file);
  break;
  default:
    fileSysMod.help();

}
