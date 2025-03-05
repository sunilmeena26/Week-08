//Create a function findMagicNumber to find the magic number
function findMagicNumber() {
  //Create a varaible to store min and max and guess number
  let min = 1;
  let max = 100;
  let guess;

  alert("Think A Number In Your Mind, If You Think Then Click 'OK'");
  //Now, Ask the user to think of a number between 1 and 100
  console.log(
    "Think of a number between 1 and 100, and I will try to guess the number."
  );

  //Use While Loop until the magic number is found
  while (min <= max) {
    // Calculate the middle number and store in guess
    guess = Math.floor((min + max) / 2);
    let response = prompt(
      `Is your number ${guess}? (Enter 'L' if it's less, Enter 'G' if it's greater, Enter 'C' If Guess Right)`
    );
    response = response.toLowerCase();
    if (response === "c") {
      console.log(`Good! The magic number is ${guess}.`);
      break;
    } else if (response === "l") {
      // The magic number is less than guess
      max = guess - 1;
    } else if (response === "g") {
      // The magic number is greater than guess
      min = guess + 1;
    } else {
      console.log(
        "Invalid input! Please enter 'L' for less, 'G' for greater, or 'C' for correct."
      );
    }
  }
}

//call the method findMagicNumber to find the magic number
findMagicNumber();
