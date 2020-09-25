const express=require('express');
const port=3000;
const es6Renderer=require('express-es6-template-engine');

const app=express();
const router=require('./router');
const routes=router.routes;

app.use(express.static(__dirname+'/public'));

//Templating Engine:
app.engine('html',es6Renderer);
app.set('views','views');
app.set('view engine','html');

/*
app.get('/', function(){
  return homeController.processReq;
});

app.get('/about', function(){
  return aboutController.processReq;
});
*/

for(let i=0; i<routes.length;i++){
  let controller=routes[i].controller;
  if(routes[i].type=="get"){
    app.get(routes[i].path, controller());
  }else if(routes[i].type=="post"){
    app.post(routes[i].path, controller());
  }
}

app.listen(port, ()=>{
    console.log(`Express.js MVC server is listening at http://localhost:${port}`);
});
