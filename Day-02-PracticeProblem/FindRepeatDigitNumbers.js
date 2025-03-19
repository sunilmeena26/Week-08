//Create a function to find the number with repeated digit
function findNumbersWithRepeatedDigits() {
    //Create an array to store result
    const repeatedDigitNumbers = [];  
 
    //Use for loop to execute from 0 to 100
    for (let number = 0; number <= 100; number++) {
        //Convert the number to a string a
        const numberString = number.toString(); // Convert the number to a string

        // Check if the number has two identical digits
        if (numberString.length === 2 && numberString[0] === numberString[1]) {
            // Add the number to the result array
            repeatedDigitNumbers.push(number); 
        }
    }

    return repeatedDigitNumbers;
}

// call the method findNumbersWithRepeatedDigits 
const numbersWithRepeatedDigits = findNumbersWithRepeatedDigits();
// print the result 
console.log("Numbers with repeated digits:", numbersWithRepeatedDigits);
