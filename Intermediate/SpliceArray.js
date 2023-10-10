const arr=[1,2,3,4,5,6];

// Here arr.splice(1->>(starting element or indexing),2-->(Range How much you want to print or After index how much element you need))
const newArr=arr.splice(1,2);
console.log(newArr);
console.log("Main array :" + arr );
const months=["januray","March","April","May"]

// Here month.splice(1-->(Starting element or indexing),0->Removing elements after the starting index,"January"->(element which has to be put in the place of starting element))
console.log(months.splice(1,0,"february","august"));
console.log(months);