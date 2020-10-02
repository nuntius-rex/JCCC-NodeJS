
//=============================================
//Making object literal:
//=============================================
var apple={
  name: "Red Delicious"
  taste: "sweet",
  color: "red"
}

//=============================================
//Multiple literal
//=============================================
var basket=[
  {
    name: "Red Delicious",
    taste: "sweet",
    color: "red"
  },
  {
    name: "Granny Smith",
    taste: "sour",
    color: "green"
  }
];

//=============================================
//Populate an array of objects: 1
//=============================================
var basket=[];
function applePicker(name, taste, color){
  basket.push(
    {
      name: name,
      taste: taste,
      color: color
    }
  )
}

applePicker("Golden","sweet","gold");
console.log(basket);

//=============================================
//Populate an array of objects: 2
//=============================================

var basket=[];
function apple(name, taste, color){
  this.appleObj={
    name:name,
    taste:taste,
    color:color
  }
  //can push after creation
  basket.push(this.appleObj);
}
var Golden = new apple("Golden","sweet","gold");
var Red= new apple("Red","sweet","red")
console.log(basket);




//=============================================
//Create objects with function - new: 3
//=============================================
var basket=[];
var apple = function(name, taste, color){
  this.name=name;
  this.taste=taste;
  this.color=color;

}
var Golden = new apple("Golden","sweet","gold");
basket.push(Golden);
console.log(Golden);
//Result: {name: "Golden", taste: "sweet", color: "gold"}
console.log(basket);


//=============================================
//Create objects with function - new: 4
//=============================================
var basket=[];
function apple(name, taste, color){
  this.name=name;
  this.taste=taste;
  this.color=color;
}
//Result: apple{name: "Golden", taste: "sweet", color: "gold"}
var Golden = new apple("Golden","sweet","gold");
var Red= new apple("Red","sweet","red")
basket.push(Golden);
basket.push(Red);
console.log(basket);


//=============================================
//Create objects with function - new: 5
//=============================================

var basket=[];
function apple(name, taste, color){
  return {
    name:name,
    taste:taste,
    color:color
  }
}
var Golden = new apple("Golden","sweet","gold");
var Red= new apple("Red","sweet","red")
basket.push(Golden);
basket.push(Red);
console.log(basket);
