const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = 0
let astronautsAboard = 0
let shuttleAltitude = 0




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


while (startingFuel >= 5000 || startingFuel <= 30000 || isNan(startingFuel)){
  startingFuel = input.question("Please enter fuel level. ");
  if (startingFuel === startingFuel >= 5000 || startingFuel <= 30000)
    break;
  else (console.log("Error: Please enter valid fuel level."))
}
console.log("\n");


// while (astronautsAboard >= 0) {
  //   if (astronautsAboard > 7)
  //     console.log("Too many passengers!")
  // }
  
  
  
  //b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
  while (astronautsAboard >= 0 || astronautsAboard <= 7 || isNaN(astronautsAboard)){
    astronautsAboard = input.question("Please enter astronaut count. ");
    if (astronautsAboard >=0 || astronautsAboard <= 7)
      break;
    else (console.log("Check manifest."));

  }
  console.log('\n');
  
  //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  
  while (startingFuel-100*astronautsAboard >= 0) {
    shuttleAltitude += 50;
    startingFuel -= 100*astronautsAboard;
  }
  

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${shuttleAltitude} km.`;
if (shuttleAltitude >= 2000) {
  output += "Orbit Achieved!"
}  else {
    console.log("Failed to achieve orbit.")
  }
console.log(output);