let myDate =new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());


//my Date is Object
console.log(typeof myDate);



let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toString())

let mynewyearDate= new Date(2022,9,20,6,5);
console.log(mynewyearDate.toLocaleString());
console.log(mynewyearDate.toString())

//Another Way to Declare Date
let stonerdate =new Date("2023-01-20");
console.log(stonerdate.toLocaleString())
console.log(stonerdate.toString())


//TimeStams
let myTimeStamp =Date.now()
console.log(myTimeStamp);

//GetTime
console.log(stonerdate.getTime());


//Converting From Millisecond to Seconds
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


//Internationalization

newDate.toLocaleString('default',{
    weekday :"long",
})