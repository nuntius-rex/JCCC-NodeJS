
const homeController=require('./controllers/homeController');
const aboutController=require('./controllers/aboutController');

const routes=[
  {
    name:"Home",
    path:"/",
    params:"",
    type:"get",
    template_name:"index",
    template:"index.html",
    controller: function(){
      return homeController.processReq;
    }
  },
  {
    name:"About",
    path:"/about",
    params:"",
    type:"get",
    template_name:"index",
    template:"index.html",
    controller: function(){
      return aboutController.processReq;
    }
  }
];

exports.routes=routes;

exports.getCurRouteObj=function(name){
    let result=routes.filter(function(item){
      if(item.name==name){
        return item;
      }
    });
    return result[0];
}
