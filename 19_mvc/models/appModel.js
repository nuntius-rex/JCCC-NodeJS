
//Normally a full CRUD type process:

const appConfig=[
  {
    "name":"Home",
    "body_content":` This is home content. `
  },
  {
    "name":"About",
    "body_content":` This is About content.`
  },
];


var getBodyContent=function(name){
    let result=appConfig.filter(function(item){
      if(item.name==name){
        return item;
      }
    });
    return result[0].body_content;
}

module.exports.getBodyContent=getBodyContent;
