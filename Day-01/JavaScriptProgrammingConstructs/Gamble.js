//Create a function gamble to simulate the gambler's game
function gamble() {
  //Create a variable to store totalAmount,targetAmount, noOfWins, and noOfBets
  let totalAmount = 100;
  let targetAmount = 200;
  let noOfWins = 0;
  let noOfBets = 0;

  //Use while loop and check amount total amount is greater than 0 or total amount less than tha target amount so while loop execute
  while (totalAmount > 0 && totalAmount < targetAmount) {
    //noOfBets increase by one
    noOfBets = noOfBets + 1;

    //Create variable betResult and store randomly wining result if true so store 1 otherwise store -1
    let betResult = Math.random() < 0.5 ? 1 : -1;
    //update total amount after bet
    totalAmount = totalAmount + betResult;

    //check bet is win or not
    if (betResult == 1) {
      //noOfWins increase by one
      noOfWins = noOfWins + 1;
    }
  }

  //Check total amount equals to 0 than print massage
  if (totalAmount === 0) {
    console.log("The gambler broke A Game!");
  } else {
    console.log("The gambler reached the goal of Rs 200!");
  }

  //print the result after game end
  console.log(`Total bets made: ${noOfBets}`);
  console.log(`Total wins: ${noOfWins}`);
}

//Call the function gamble to perform game
gamble();
