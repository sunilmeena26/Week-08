//Create a funtion to generate the single digit Using REPL
function getSingleDigit(){
    //Call the floor method and return the value
   return Math.floor(Math.random()*10);
}

//Print the result and call the function
console.log("Random Single Digit : ",getSingleDigit());