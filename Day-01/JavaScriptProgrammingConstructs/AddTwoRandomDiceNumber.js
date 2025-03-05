//Create a funtion to get the Dice Number Using REPL
function getRandomDiceNumber() {
  //Call the floor and random method and return the value
  return Math.floor(Math.random() * 6) + 1;
}

//Create a funtion addTwoDiceNumber to add the dice number
function addTwoDiceNumber() {
  //Create const variable to store variable and call the getDiceNumber() function
  const randomDiceNumber1 = getRandomDiceNumber();
  const randomDiceNumber2 = getRandomDiceNumber();

  //Create  a const variable answer to store the result
  const result = randomDiceNumber1 + randomDiceNumber2;

  //Return the value
  return `Dice Number1 : ${randomDiceNumber1} \nDice Number2 : ${randomDiceNumber2} \nAdditon : ${result}`;
}

//Display the result and call the method
console.log(addTwoDiceNumber());
