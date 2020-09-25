
var death_id=(Math.random()<0.5)?1:2;

var Character=function(id, name, fightWords){
  this.id=id;
  this.name=name;
  this.insults=[
    "Your mother smells of elderberry!",
    "Thou traitorous px-marked foot-liker!"
  ];
  this.insult=function(){
    let ranNum=Math.floor(Math.random()*this.insults.length);
    return this.insults[ranNum];
  }
  this.swordSounds=["Shing!","Crung!","Parang!"];
  this.fight=function(fightWords){
    let ranNum=Math.floor(Math.random()*this.swordSounds.length);
    return fightWords+"\n"+this.swordSounds[ranNum];
  }
  this.die=function(){
    if(this.id==death_id){
      return `${this.name} has died!`;
    }else{
      return "";
    }
  }
}

var Player1=new Character(1,"White Knight");
var Player2=new Character(2,"Black Knight");
//console.log(Player1);
//console.log(Player2);
console.log(Player1.insult());
console.log(Player2.insult());
console.log(Player1.fight("On Guard!"));
console.log(Player2.fight("Defend Yourself Heathen!"));
console.log(Player1.fight());
console.log(Player2.fight());
console.log(Player1.die());
console.log(Player2.die());

//======================================================
//Alternate way:
//======================================================
var death_id=(Math.random()<0.5)?1:2;
var Character=function(id, name){
  return {
    id:id,
    name:name,
    insults:[
      "Your mother smells of elderberry!",
      "Thou traitorous px-marked foot-liker!"
    ],
    insult:function(){
      let ranNum=Math.floor(Math.random()*this.insults.length);
      return `"${this.insults[ranNum]}", said ${this.name}.`;
    },
    swordSounds:["Shing!","Crung!","Parang!"],
    fight:function(fightWords){
      let ranNum=Math.floor(Math.random()*this.swordSounds.length);
      if(fightWords!=undefined){
        return `"${fightWords}", said ${this.name}.\n ${this.swordSounds[ranNum]}`;
      }else{
        return this.swordSounds[ranNum];
      }
    },
    die:function(){
      if(this.id==death_id){
        return `${this.name} has died!`;
      }else{
        return "";
      }
    }
  }
}

var Player1=new Character(1,"White Knight");
var Player2=new Character(2,"Black Knight");
//console.log(Player1);
//console.log(Player2);
console.log(Player1.insult());
console.log(Player2.insult());
console.log(Player1.fight("On Guard!"));
console.log(Player2.fight("Defend Yourself Heathen!"));
console.log(Player1.fight());
console.log(Player2.fight());
console.log(Player1.die());
console.log(Player2.die());
