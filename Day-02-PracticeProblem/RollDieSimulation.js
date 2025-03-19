// Create function rollDieSimulation to simulate the die rolling process
function rollDieSimulation() {
    //Create a dictionary to store die roll results
    const dieResults = {}; 
    //Create a maximum times a single number can appear
    const maxRolls = 10; 

    // Use for loop to initialize the dictionary with keys 1 to 6, representing die faces, and set counts to 0
    for (let i = 1; i <= 6; i++) {
        dieResults[i] = 0;
    }

    let maxCountReached = false; // Flag to stop rolling when any number reaches maxRolls

    // Continue rolling until one of the numbers reaches the maximum count
    while (!maxCountReached) {
        const roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        dieResults[roll]++; // Increment the count for the rolled number

        // Check if any number has reached the maximum count
        if (dieResults[roll] === maxRolls) {
            maxCountReached = true;
        }
    }

    //Create a variable maxNumber, minNumber, maxCount and minCount find the number with maximum and minimum occurrences
    let maxNumber = null;
    let minNumber = null;
    let maxCount = 0;
    let minCount = maxRolls;

    for (const [number, count] of Object.entries(dieResults)) {
        if (count > maxCount) {
            maxCount = count;
            maxNumber = number;
        }
        if (count < minCount) {
            minCount = count;
            minNumber = number;
        }
    }

    // Print the result
    console.log("Die Roll Results:", dieResults);
    console.log(`Number that appeared the most: ${maxNumber} (${maxCount} times)`);
    console.log(`Number that appeared the least: ${minNumber} (${minCount} times)`);
}

//call the method
rollDieSimulation();
