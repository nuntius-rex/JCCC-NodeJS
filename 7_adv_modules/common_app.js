
const Mod1=require("./lib/module1");
const Mod2=require("./lib/module2");
const Mod3=require("./lib/module3");

console.log(Mod1.name);
console.log(Mod1.method1());
console.log(Mod1.method2());

console.log(Mod2.name);
console.log(Mod2.method1());
console.log(Mod2.method2());

let Mod3Obj = new Mod3();
//console.log(Mod3Obj);
console.log(Mod3Obj.name);
console.log(Mod3Obj.method1());
console.log(Mod3Obj.method2());
