
/*
NodeJS does not have ES6 Modules support natively without running
the --experimental-modules flag:

>node --experimental-modules es6_app.mjs

Also note the name with .mjs that denotes module running.

Only other way is to use Babel

*/

import { sayHello, Module1 } from './lib/ES6.mjs';

console.log(sayHello('World'));

console.log(Module1.name);
console.log(Module1.method1());
console.log(Module1.method2());
