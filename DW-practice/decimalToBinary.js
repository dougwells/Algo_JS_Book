"use strict"

function decimalToBinary(num){
  let stack = []
  return function internalDecToBi(intNum =num){
  if(intNum <=0){
    return stack
  }else{
    let remainder = intNum%2;
    let quotient = Math.floor(intNum/2);
    stack.push(remainder);
    // console.log(quotient, stack);
    return internalDecToBi(quotient);
  }
}
}
console.log("10 in binary =",decimalToBinary(10)());
console.log("100 in binary =",decimalToBinary(100)());
console.log("495 in binary =", decimalToBinary(495)());
