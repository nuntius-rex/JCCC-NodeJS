
//Classic Function Object
let Module3=function(){
  this.name="Module 3";
  this.method1=function(){
    return `You called ${this.name} method 1`;
  }
  this.method2=function(){
      return `You called ${this.name} method 2`;
  }
}

module.exports=Module3;
