// Destructuring Assignment + Property Shorthand
var [x, y] = ['a', 'b'];
var obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

//swap x & y values
[x, y] = [y, x];
var obj = { x, y };
console.log(obj); // { x: "b", y: "a" }


//code above is the same as
var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y };
console.log(obj2); // { x: "a", y: "b" }


// Method Properties
var hello = {
    name : 'abcdef',
    printHello(){
        console.log('Hello');
    }
}
console.log(hello.printHello());

//code above is the same as:
var hello2 = {
    name: 'abcdef',
    printHello: function printHello() {
        console.log('Hello');
    }
};
console.log(hello2.printHello());
