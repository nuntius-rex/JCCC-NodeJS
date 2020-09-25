// CommonJS module:

let Module2={
  name: "Module 2",
  method1: function(){
    //return "You called "+this.name+" method 1";
    return `You called ${this.name} method 1`;
  },
  method2: function(){
    return "You called "+this.name+" method 2";
  }
}

module.exports=Module2;
