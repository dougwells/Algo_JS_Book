var outerFn = function(){
  return innerFn(25);
}

var innerFn = function(multiplier){
  if(multiplier>100){console.log(multiplier); return multiplier}
  console.log(multiplier);
  return innerFn(multiplier*2);
}

console.log(outerFn());
