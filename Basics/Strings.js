const name ="Sagar";
const repoCount =60;
console.log(name +repoCount+"Value");
// String interpoliation
console.log(`Hello everyone my name is ${name} and my total github repository is ${repoCount}`)

//Declaration of String Another way
const game= new String("sagaris-god")

// accesing the String based on Key value pairs
console.log(game[0]);
console.log(game[1]);
console.log(game[2]);
console.log(game[3]);
console.log(game[4]);

console.log(game.length);
console.log(game.toUpperCase());
//Check the character basedon indices
console.log(game.charAt(3));
//Check the character at which index
console.log(game.indexOf('g'))

//Substring Method -> You cannot use negative value in it
//Keep in Mind Last value is not included-> Take the bottom case Value 5 will be not included
const newString = game.substring(0,5)
console.log(newString);


//Slice Method -> You can Use negatibe values in slice inorder to start from last to first
const anotherstring = game.slice(-11,8);
console.log(anotherstring);

//Trim Method -> Remove unecsessary Spaces
const newStringone ="    Sagar   "
console.log(newStringone);
console.log(newStringone.trim());
//Replce method ->Replacing values
const url ="https://sagar.com/sagar%20gusain"
console.log(url.replace('%20','-'));

//includes Method -> to check that given string include the word in it
console.log(newStringone.includes('Sagar'));
console.log(newStringone.includes('Dhruv'));

//Split method
const hero = "Superman Batman Ironman Thor Loki Hulk Blackpanther"
console.log(hero.split(' '));