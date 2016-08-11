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
