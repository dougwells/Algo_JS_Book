//stack (first in first out)

"use strict"
let stack = [];

//Add to stack
for(var i=1; i<=10; i++){
  stack.push(i);
}
console.log(stack);

//Extract from end of stack
console.log("Take off end of stack", stack.pop(), stack);

//Extract from start of array
console.log("Take off start of array", stack.shift(), stack)
