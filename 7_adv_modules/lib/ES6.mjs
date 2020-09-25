
export function sayHello(name){
  return `Hello, ${name}!!!`;
}

export const Module1={
  name: "Module 1",
  method1: function(){
    //return "You called "+this.name+" method 1";
    return `You called ${this.name} method 1`;
  },
  method2: function(){
    return `You called ${this.name} method 2`;
  }
}
