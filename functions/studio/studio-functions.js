//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
function reverseCharacters(myVariableName) {
    let reversedString = "";
    if (typeof myVariableName === "number") {
        myVariableName = String(myVariableName);
        reversedString = myVariableName.split("").reverse().join("");
        reversedString = Number(reversedString);
        console.log(typeof reversedString)
    }   else {
        reversedString = myVariableName.split("").reverse().join("");
    }


    return reversedString;
}
console.log(reverseCharacters("ANY RANDOM STRING"));
// 2. Within the function, split the string into an array, then reverse the array.

// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.

// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

// Part Three: Complete Reversal

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];
function reverseArray(inputArray) {
    let array = []
    for (let i = 0; i < inputArray.length; i++) {
        array.push(reverseCharacters(inputArray[i]))
    }
    return array.reverse()
}
console.log(reverseArray(arrayTest1));

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.
function funPhrase(string) {
    let newString = "";
    if (string.length <= 3) {
        newString = string.slice(-1)
    }   else {
        newString = (string.slice(0, 3));
    }
    return (`We put the ${newString} in ${string}. COOOOL.`)
    
    //We put the fun in function.
    //We put the t in put
}
console.log(funPhrase("ABCDEF"));