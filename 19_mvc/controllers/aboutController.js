
const router=require('../router');
const appModel=require('../models/appModel');

exports.processReq=(req,res)=>{
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("About");
  let template=routeObj.template;

  var bodyContent=appModel.getBodyContent("About");

  res.render(template, {locals: {title: 'About Page!', body_content: bodyContent} } );
}
