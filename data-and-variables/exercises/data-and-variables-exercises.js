// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfTheSpaceShuttle = ("Determination");

let shuttleSpeed = (17500);

let distanceToMars = (225000000);

let distanceToTheMoon = (384400);

let milesPerKilometer = (0.621);

console.log(typeof nameOfTheSpaceShuttle);

console.log(typeof shuttleSpeed)

console.log(typeof distanceToMars)

console.log(typeof distanceToTheMoon)

console.log(typeof milesPerKilometer)

let milesToMars = distanceToMars * milesPerKilometer;

let hoursToMars = milesToMars / shuttleSpeed;

let daysToMars = hoursToMars / 24;

console.log(nameOfTheSpaceShuttle+"will take"+
daysToMars+"days to reach Mars");

let milesToMoon = distanceToTheMoon * milesPerKilometer;

let hoursToTheMoon = milesToMoon / shuttleSpeed;

let daysToTheMoon = hoursToTheMoon / 24;

console.log(nameOfTheSpaceShuttle + "will take" + daysToTheMoon + "days to reach the Moon.");

