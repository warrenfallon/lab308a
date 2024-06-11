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
       



