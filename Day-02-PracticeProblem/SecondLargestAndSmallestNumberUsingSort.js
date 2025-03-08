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

//Create a function to sort the array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Create a variable to store sorted array and call the function
let sortedNumbers = sortArray(randomNumbers);

//print the sorted array
console.log("Sorted Numbers: ",sortedNumbers);

// Create a function findSecondSmallestAndLargestNumber to find the Second largest and Second smallest elements in the array without sorting
function findSecondSmallestAndLargestNumber(arr) {
    //return the second largest and smallest Number
    return {
        secondLargest: arr[arr.length - 2],
        secondSmallest: arr[1]
    };
}

// Create a variable result store 2nd largest and 2nd smallest elements in the random Numbers array and call the method
let result = findSecondSmallestAndLargestNumber(randomNumbers);

//print the result
console.log("Second Largest: ", result.secondLargest);
console.log("Second Smallest: ", result.secondSmallest);
