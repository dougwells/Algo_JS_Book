//stack (first in first out)

"use strict"
let stack = [];

//Add to front of array
for(var i=1; i<=10; i++){
  stack.push(i);
}
console.log(stack);

//Extract from top of stack
console.log("Take off end of stack", stack.pop(), stack);

//Extract from start of array (bottom of stack)
console.log("Take off start of array", stack.shift(), stack)

//forEach merely iterates over each item.  No new array
var forEachEx = stack.forEach(function(i){console.log(i+1);});
console.log(".forEach -> Plus 1", forEachEx, "origin", stack);


//.map() and .filter return NEW arrays
var mapExArr = stack.map(function(item){return item+1;})
console.log(".map -> Plus 1", mapExArr, "origin", stack);

//.for of loop.  New in ES6
let cuts = ["steak", "chop", "roast"]
for (let [i,cut] of cuts.entries()){
  console.log(`For of Loop. ${cut} is index ${i}`);
}

//retrieving key value pairs from arrays
//if no key given, it will simply be position index of array item
let numbers = [1,2,3,4,5];

  //entries method
    let numEntries = numbers.entries()
    console.log(numEntries.next().value);

  //keys method
    let numKeys = numbers.keys()
    console.log(numKeys);
    console.log(numKeys.next());

  //values method
    let numValues = numbers.values()
    console.log(numValues.next());
    console.log(numValues.next().value);
