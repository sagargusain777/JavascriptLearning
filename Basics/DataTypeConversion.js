let score =33;
console.log(typeof score);
console.log(typeof (score));

let score1 ="33";
console.log(typeof score1);
console.log(typeof (score1));
//typecasting  ->Conversion
let ValueinNumber=Number(score1);
console.log(typeof ValueinNumber);

//Not a Number
let score2="33abc"
console.log(typeof score2);
let ValueinNumber2=Number(score2)
//Checking the type of ValueinNumber2 Variable
console.log(typeof ValueinNumber2)
// Printing the Value inside ValueinNumber2 Variable
console.log(ValueinNumber2);


//Special Cases Of Null
let value = null;
console.log(typeof value);
let valuenumber=Number(value);
console.log(typeof valuenumber);
//Printing the valuenumber
console.log(valuenumber);

//Special Case of Undefined
let age = undefined;
console.log(typeof age);

let ageNumber =Number(age);
console.log(typeof (ageNumber));
//Printing the ageNumber Variable
console.log(ageNumber);



//Boolean Cases
let isloggedin =false;
console.log(typeof (isloggedin));
 
let isloggedNumber=Number(isloggedin);
console.log(typeof (isloggedNumber));
//printing the New Created Variable
console.log(isloggedNumber);


