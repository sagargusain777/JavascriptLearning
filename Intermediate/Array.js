//Array

const myArray=[0,1,2,3,4];
const myHeroes=new Array(1,2,3,4,5);

//Accessing Element
console.log(myArray[0]);

const superheroes=['Ironman','Loki','Hulk','CaptainAmerica']
const valorantAgents=["Reyna","Raze","Jet","Brimstone"]

console.log(valorantAgents[1]);

//----Methods---//
//push -> Pushing element in the array
valorantAgents.push("Omen");
console.log(valorantAgents);


//length of the array
console.log(valorantAgents.length);

//pop -> Pull out the last element in the array
valorantAgents.pop();
console.log(valorantAgents);

// Unshift->putting the element in the starting
valorantAgents.unshift("Skye");
console.log(valorantAgents);
//Shift->removing the first element from the array
valorantAgents.shift();
console.log(valorantAgents);

//---Importan--//
//includes -- Case Sensitive
console.log(valorantAgents.includes("Jet"));//true
console.log(valorantAgents.includes("jet")); //false->case Sensitive

//indexof -> tells the index
console.log(valorantAgents.indexOf("Jet"));
console.log(valorantAgents.indexOf("Chamber"))