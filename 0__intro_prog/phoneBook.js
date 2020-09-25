
//1) Array phonebook
//2) Name, phone
//3) Display phonebook with console.log()

//=============================================
//1 function push
//=============================================
var phonebook=[];
function Contact(name, number){
  phonebook.push(
    {
      name: name,
      number: number
    }
  )
}

Contact("Dan","123-456-7890");
Contact("Barb","123-456-7891");
console.log(phonebook);

//=============================================
//2 function dot notation
//=============================================

var phonebook=[];
var Contact=function(name, number){
  this.name=name;
  this.number=number;
}
var Dan=new Contact("Dan","123-456-7890");
phonebook.push(Dan);
var Barb=new Contact("Barb","123-456-7891");
phonebook.push(Barb);
console.log(phonebook);
