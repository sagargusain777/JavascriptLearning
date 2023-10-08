// Stack Memory--> Primitive
//You Get Copy of the Value

let youtubename ="uniquefx";
let anotheryt =youtubename;
console.log(anotheryt);
anotheryt ="uniqueisnoob";
console.log(anotheryt);
console.log(youtubename);



//Heap Memory ---> Non - Primitive
//You get the reference of Value

let userOne ={
    email: "userone@gmail.com",
    upi:"user.ybl"
}

let userTwo= userOne
userTwo.email="hiteshchaudhary";
console.log(userOne.email)
console.log(userTwo.email)