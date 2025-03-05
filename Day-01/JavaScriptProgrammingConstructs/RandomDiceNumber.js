//Create a funtion to get the Dice Number Using REPL
function getDiceNumber() {
  //Call the floor and random method and return the value
  return Math.floor(Math.random() * 6) + 1;
}

//Print the result and call the function
console.log("Dice Number : ", getDiceNumber());
