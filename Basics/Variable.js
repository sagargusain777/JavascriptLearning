const accountId = 144453  
let accountEmail ="sagargusain150@gmail.com"
var accountPassword="1234"
accountCity ="Meerut"
let accountstate;

// accountId = 6 -- Not Allowed
accountEmail = "simran@gmail.com"
accountPasssword ="656969"
accountCity= "Delhi"
console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail ,accountPassword,accountCity,accountstate])
/*
 Prefer not to Use var
 Because od issue in blockscope or Functional Scope
 e.g:- Previous times of Javascript There was a major issue 
 like if you have take a var of something and also while using a For loop 
 when you change the value of accountvaribale  that is different ; due to this major issue it will change tha value
 for everyone in the program.
 


*/