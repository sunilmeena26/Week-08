//create a method findTripletsThatSumToZero to find 
function findTripletsThatSumToZero(numbersArray) {
    const result = [];
    
    // sort the array using sort method
    numbersArray.sort((a, b) => a - b);

    //Use for loop to iterate array
    for (let i = 0; i < numbersArray.length - 2; i++) {
        //Use if statement to skip duplicates for the first number of the triplet
        if (i > 0 && numbersArray[i] === numbersArray[i - 1]) continue;

        //Create a variable left to start pointer for the second number
        let left = i + 1; 
        //Create a variable right to  end pointer for the third number
        let right = numbersArray.length - 1;

        while (left < right) {
            const sum = numbersArray[i] + numbersArray[left] + numbersArray[right];

            if (sum === 0) {
                // store Add the triplet to the result
                result.push([numbersArray[i], numbersArray[left], numbersArray[right]]);

                // Skip duplicates for the second and third numbers
                while (left < right && numbersArray[left] === numbersArray[left + 1]) left++;
                while (left < right && numbersArray[right] === numbersArray[right - 1]) right--;

                //increate left by 1 and decrease right by 1
                left++;
                right--;
            } else if (sum < 0) {
                // If the sum is less than zero increase left by 1
                left++;
            } else {
                // If the sum is greater than zero decrease right by 1
                right--;
            }
        }
    }

    //return the result
    return result;
}

//Create a array integerArray for example perpose
const integerArray = [-1, 0, 1, 2, -1, -4];
//Create a triplets to store result and call the method
const triplets = findTripletsThatSumToZero(integerArray);
//print the result
console.log("Triplets that sum to zero:", triplets);
