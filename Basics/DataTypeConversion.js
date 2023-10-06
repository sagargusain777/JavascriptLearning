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

//"33"-->33
//"33abc"-->NaN

//Special Cases Of Null
let value = null;
console.log(typeof value);
let valuenumber=Number(value);
console.log(typeof valuenumber);
//Printing the valuenumber
console.log(valuenumber);

//null-->0

//Special Case of Undefined
let age = undefined;
console.log(typeof age);

let ageNumber =Number(age);
console.log(typeof (ageNumber));
//Printing the ageNumber Variable
console.log(ageNumber);

//undefined-->0



//Boolean Cases
let isloggedin =false;
console.log(typeof (isloggedin));
 
let isloggedNumber=Number(isloggedin);
console.log(typeof (isloggedNumber));
//printing the New Created Variable
console.log(isloggedNumber);

// False-->0
//True-->1


//Number To Boolean Conversion
let adio = 1;
console.log(typeof adio);

let booladio = Boolean(adio)
console.log(typeof (booladio));
console.log(booladio);


let nike =0;
console.log(typeof (nike));
let nikebool=Boolean(nike);
console.log(typeof nikebool);

console.log(nikebool);

//1--> True
//0-->False
//""-->False
//"SAGAR"--> True

//  String To Boolean Conversion
let stoner ="";
console.log(typeof stoner);
let stonerbool=Boolean(stoner);
console.log(typeof stonerbool);
console.log(stonerbool);

let stoner1="LIGMA";
console.log(typeof stoner1);
let stoner1bool=Boolean(stoner1);
console.log(typeof stoner1bool);
console.log(stoner1bool);

