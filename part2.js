function sumEvenArguments(...args){
	let evenArgs = args.filter(function(val){
	    return val % 2 === 0
	  })
	.reduce(function(acc, next){
	  return acc + next
	   },0)
   return evenArgs;
}
// Part 2
// Call Apply Bind Exercises
// 1 Fix the following code:
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
 }
}
 obj.person.sayHi.call(obj, obj.fullName);
// 2 List two examples of "array-like-objects" that we have seen.
// i argument
// ii DOM model
// 3 Functions to write:
// Make the tests pass for the following functions:
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
// solution 
function sumEvenArguments(...args){
    let evenArgs = args.filter(function(val){
        return val % 2 === 0
      })
    .reduce(function(acc, next){
      return acc + next
       },0)
  return evenArgs;
  
 
   }
 
sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2
//  4 Write a function called arrayFrom which converts an array-like-object into an array.
function arrayFrom(...args){
    let newArray = [];
    args.forEach((val) => {
        newArray.push(val);})
    return newArray;
 };
function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}
//  Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should
//     return a function that when called increments a counter.If the counter is greater than the maximum amount,
// 	the inner function should return "Maxed Out!"
function invokeMax(fn, max){
    let counter = 0;
    return function checker(a, b){
        counter++;
        if(counter > max){
            return "Maxed Out!";
        } else {
            return fn(a, b);
        }
    }
}

function add(a,b){
    return a+b
}
var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"
 


