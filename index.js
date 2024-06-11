// Declare a global counter variable
  let counter = 0;

  // Create a simple function that increments the counter and calls itself
    function recursiveFunction () {
   counter++;
   recursiveFunction();
 }

    // Surround the inital function call in a try/catach block
       try {
    recursiveFunction() ; 
} catch (error) {
     // log the error and the value of the counter variable
     console.log ("Stack overflow error:",error);
       console.log ("Counter value:", counter);
       }



       // Part 2: Tramolines code

         // Function to flatten nested arrays using recursion
         function flattenArray(arr) {
            return arr.reduce((acc, val)=> {
         return Array.isArray(val) ?
             acc.concat(flattenArray(val)) :
             acc.concat(val); }, []);
         }
       
// Test the function 
console.log(flattenArray([1, [2,[3,[4,[5,]]]]])); // Output: [1, 2, 3, 4, 5]

// Trampoline function to handle rescursion without stack overflow
function Trampoline(fn){
return function (...args) {
let result = fn.apply(this,args);
  while(typeof result === 'function') {
    result = result();
  }
  return result;
};
}
 

// Trampolined function to flatten nested arrays
function
flattenArrayTrampoline(arr) {
function step(acc, val) {
if (Array.isArray(val)) {
return function() {
return
step(acc.concat(val), val);};
} else {

    return function () {
        return acc.concat(val);
};
}
}
return step ([], arr);
}
const TrampolinedFlatten = Trampoline(flattenArrayTrampoline);

// Test the trampolined function 
console.log(TrampolinedFlatten([1, [2, [3, [4, [5]]]]]));

//Output:[1, 2, 3, 4, 5]






