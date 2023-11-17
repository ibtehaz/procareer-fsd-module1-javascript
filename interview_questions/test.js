/*

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

  */


  /*

  for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

*/

/*

var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); 
}
greeting();

*/



/*

// converting array to obj

var fruits = ["banana", "apple", "orange", "watermelon"];
var obj = {fruits}
console.log(obj)
var fruitsObject = new Object(fruits) 
console.log(fruitsObject)
var obj1 = {...fruits}
console.log(obj1)
var obj2 = Object.assign({},fruits);
console.log(obj2)

*/


/*

//emptying an array

var fruits = ['a', 'b', 'c']

//fruits.length = 0
//fruits = []
//fruits.splice(0, fruits.length)


console.log(fruits)

*/


/*

function add(n1, n2, n3, n4) {
  return [n1, n2, n3, n4]
}

// how to check how many params does the function add take

console.log(add.length)

*/


/*


/*

// define closure
// lexical scoping
// function inside function
// retaining state

function outerfun() {
  let x = 10
  function innerfun() {
    let y = 20
    console.log(x + y)
  }
  return innerfun
}

outerfun()

let res = outerfun()

res()

*/