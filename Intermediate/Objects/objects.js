//singleton=> If we create objects throught constructor
//Object.create

//Object Literals


//Declare symbol
const mysymb =Symbol("mykey");
const sym =Symbol("myjourney")
const jsuser={
    "Full name": "Simran Gusain",
    name : "Simran",
    mysymb :"mykey1",
    [sym] : "myjourney1",
    age : 22,
    gender : "female",
    location : "Meerut",
    isloggedin: false,
    lastlogindays: ["Monday","Wednesday"],
    lastl : this.name,
    myfunction : function(){
        console.log(this["Full name"])

    }

    

}

console.log(jsuser.gender)
console.log(jsuser["gender"]) //Important

console.log(jsuser["Full name"])
console.log(jsuser.mysymb)
console.log(typeof jsuser.mysymb)

//Put symbol inside the object and access it as symbol
console.log(jsuser[sym])
console.log(typeof jsuser[sym])
console.log(jsuser)

//Edit or Update inside th object
jsuser.gender="Male";
console.log(jsuser["gender"]);
console.log(jsuser.gender)