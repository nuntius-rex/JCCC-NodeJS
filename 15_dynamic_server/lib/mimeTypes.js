
let mimeTypes={
  types:{
    html:'text/html',
    js:'text/javascript',
    css:'text/css',
    ico:'image/x-icon',
    jpg:'image/jpg',

  },
  getMimeTypes:function(name){
    return this.types[name];
  }

}

module.exports=mimeTypes;
