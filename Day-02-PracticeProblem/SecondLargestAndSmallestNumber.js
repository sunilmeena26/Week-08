// Create a function generateRandomThreeDigitNumber to generate a random 3-digit Number
function generateRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

// Create an Array to store generated 10 random 3-digit Numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    //add Number in arrry and call the function
    randomNumbers.push(generateRandomThreeDigitNumber());
}

//Print the random Numbers
console.log("Random Numbers Are: ", randomNumbers);

// Create a function findSecondSmallestAndLargestNumber to find the Second largest and Second smallest elements in the array without sorting
function findSecondSmallestAndLargestNumber(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;
    
    //use for-of to iterate the array
    for (let number of arr) {
        //Use if statement toFinding the largest and second largest Numbers
        if (number > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = number;
        } else if (number > secondLargest && number !== firstLargest) {
            secondLargest = number;
        }
        
        //Use if statement to finding the smallest and second smallest Numbers
        if (number < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = number;
        } else if (number < secondSmallest && number !== firstSmallest) {
            secondSmallest = number;
        }
    }

    //return the second largest and smallest Number
    return {
        secondLargest: secondLargest,
        secondSmallest: secondSmallest
    };
}

// Create a variable result store 2nd largest and 2nd smallest elements in the random Numbers array and call the method
let result = findSecondSmallestAndLargestNumber(randomNumbers);

//print the result
console.log("Second Largest: ", result.secondLargest);
console.log("Second Smallest: ", result.secondSmallest);
