const cities = require("cities");
const user = require("./lib/user");
const member = require("./lib/memberCalcs");

var userObj=user.getUser();

//console.log(user);
//console.log(member);
//console.log(cities);
console.log(userObj);

//name
//city
//state
//how many years a member

var zip=userObj.zip;
//console.log(zip);

var zipInfo=cities.zip_lookup(zip);
console.log(zipInfo);

var yearsMember=member.yrsMember(userObj.membership_year);
//console.log(yearsMember);
var membershipType=member.membershipType(userObj.status,yearsMember);
//console.log(membershipType);

var result=`
${userObj.first_name} ${userObj.last_name}
${zipInfo.city},${zipInfo.state}
Member status: ${userObj.status}
Membership type: ${membershipType}
Member for: ${yearsMember} years
`;

console.log(result);
