let counter = 0;

function forever(){

// Base Case



try {
    if ( counter > 100){
        return true;
    }
    console.log(counter)
    counter = counter + 1;
    forever()  

} catch (error) {
    console.log(error)
    alert("We're sorry something happened")

}
  
}

forever()






// promises


// let array = [1,2,3]

// for( let i =0; i <  array.length;i++){
//     console.log(i)
// }
