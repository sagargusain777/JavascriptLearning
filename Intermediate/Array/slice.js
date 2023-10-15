// Slice method is used to give a portion From the array
//It does not affect the main array and provides the shallow copyy of the array
// Return value -> A new array containing the extracted elements.

const friends =["verticuse","unfazed","life","uniq","cyzen","arconic"];

console.log(friends.slice(2,5)); // life uniq  cyzen

console.log(friends.slice(1));  //unfazed life uniq cyzen arconic


const animals=["ant","elephant","tiger","cow","snake"]

const newanimals= animals.slice(-4)
console.log(newanimals);
const negpov=animals.slice(-4,4) //elephant tiger cow
console.log(negpov)



//(-4,5)-> -4 will be starting fron last of the array . simple 4 3 2 1 like this,Also last elemnt will not be included and (Zero based indexing)
//(0,3)->