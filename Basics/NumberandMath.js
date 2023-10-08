const score=400;
console.log(score);
const balance= new Number(1000);
console.log(balance);


// To String method
console.log(balance.toString());
console.log(balance.toString().length);


//Decimals Value--> Specically Used in Banking and Ecommerce
console.log(balance.toFixed(2));

//Local
const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'))
//++++++++++++++++++  MAths ++++++++++++++++++++++++


//Absolute
console.log(Math.abs(-4))
console.log(Math.abs(5))

//Round
console.log(Math.round(5.9));
console.log(Math.round(4.1));

//Random
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)

const min =10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)