
const router=require('../router');
const appModel=require('../models/appModel');

exports.processReq=(req,res)=>{
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("Home");
  let template=routeObj.template;

  //Call Model:
  var bodyContent=appModel.getBodyContent("Home");

  res.render(template, {locals: {title: 'Home Page!', body_content: bodyContent } } );
}
