// Declare a global counter variable
  let counter = 0;

  // Create a simple function that increments the counter and calls itself recursively
    function recursiveFunction () {
   counter++; // Increase the counter by 1
   recursiveFunction(); // Call the function again (recursively)
 }

    // Try to call the recursive function and catch any errors that occur
       try {
    recursiveFunction(); // Start the recursive calls
} catch (error) {
     // If a stack overflow error occurs, log the error and the value
     console.log ("Stack overflow error:",error);
       console.log ("Counter value:", counter); // Log how manay times the function was called before the error
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
 
// Test the function to handle recursion without stack overflow
function Trampoline(fn) {
return function(...args){
    let result = fn.apply(this,args);
    while (typeof result === 'function') {
        result = result ();
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


// Part 3: Deferred Execution Code

// Function to check if a number is prime 


const result = document.querySelector(".result");

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbersToNum(num) {
        for (let i = 2; i <= num; i++) {
            if (isPrime(i)) {
        
                let item = document.createElement("li");
                item.innerText = i;
                result.appendChild(item);
              
            }
          } 
          
          setTimeout(() =>{
alert("calculations complete")
},10)

 }
// Run the function with n = 10000
printPrimeNumbersToNum(10000);








