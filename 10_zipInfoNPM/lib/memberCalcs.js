
exports.yrsMember=(year)=>{
  const currentYear=new Date().getFullYear();
  return currentYear-year;
}

exports.membershipType=(status,yrs)=>{
  if(status=="active"){
    if(yrs<=4){
      return "basic";
    }else if(yrs>5 && yrs<8){
      return "silver";
    }else if(yrs>7){
      return "gold";
    }
  }else{
    return "expired";
  }
}

/*
function that recieves 1) status, 2)yrs member

return type of membership:
1-4 - basic
5-7 - silver
7-10+ - gold

*/
