const marvelHeroes =["Ironman","Spiderman","Hulk","Black Panther"];
const dcheroes=["Supereman","Flash","Batman"];

// marvelHeroes.push(dcheroes);
console.log(marvelHeroes);
// It is pushing array as a individual element
marvelHeroes.push(dcheroes);
//printing it
console.log(marvelHeroes[4]);
//Accessing element in array
console.log(marvelHeroes[4][1]);

//concat Method-> You have to create a new variable. It returns new array.
const heroes=marvelHeroes.concat(dcheroes);
console.log(heroes);

//Spread Operator
const fruit =["banana","orange","apple"];
const vegetable=["tomato","potato","lady finger"]
const allnew =[...fruit,...vegetable];
console.log(allnew);
//Method to Flat the array
const marks =[1,2,3,[4,5,6],8,9,[7,6,[8,9,12,[7,2,1,3]]]]
const result = marks.flat(Infinity);//Infinity -> Basically you Have to check how much depth
console.log(result)

// Creating a Array From multiple variables
let score1 =100;
let score2 = 600;
let score3 =500;
const finalscore =Array.of(score1,score2,score3);
console.log(finalscore);



//Check that the following is array
console.log(Array.isArray("Hitesh"));
console.log(Array.from("sagar"));
console.log(Array.from({name :"hitesh"}));
