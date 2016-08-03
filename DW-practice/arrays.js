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
