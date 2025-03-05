//Create a function to simulate a coin flip and return the resultF
function coinFlip() {
  //Create a variable to store the random value 0 or 1
  let num = Math.random().toFixed();

  //Check the conditon
  if (num == 0) {
    //Return the result
    return "Heads";
  } else {
    //Return the result
    return "Tails";
  }
}

//Call the function and print the result
console.log(coinFlip());
