//Create a function to simulate a coin flip and return the answerF
function coinFlip() {
  //Create a variable to store the random value 0 or 1
  let number = Math.random().toFixed();

  //Check the conditon
  if (number == 0) {
    //Return the answer
    return "Heads";
  } else {
    //Return the answer
    return "Tails";
  }
}

//Create a funtion to find the coin flip winner
function coinFlipWin() {
  //Create two variable to store the head and tail count
  let headCount = 0;
  let tailCount = 0;

  //Use while loop
  while (headCount < 11 && tailCount < 11) {
    //Create a variable to store the answer
    let answer = coinFlip();

    //Use if to check condition
    if (answer === "Heads") {
      headCount++;
    } else {
      tailCount++;
    }
  }

  //Print the both counts
  console.log(`No. of Heads ${headCount} and No. of Tails ${tailCount}`);

  //Return the value
  return headCount === 11 ? "Heads Win!" : "Tails Win!";
}

//Call the function and print the answer
console.log(coinFlipWin());
