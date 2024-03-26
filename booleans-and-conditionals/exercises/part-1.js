// Declare and initialize the variables for exercise 1 here: 
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuddleCabinReady = true;
let crewStatus = spaceSuitsOn && shuddleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


if (crewStatus) {
      console.log("Crew Ready");}
      else {
      console.log("Crew Not Ready")
}

if (computerStatusCode === 200) {
      console.log("Please Stand By. Computer Is Rebooting.")}
      else if (computerStatusCode === 400){
         console.log("Success! Computer online!")}
      else 
         {console.log("Computer is offline.")}

if (shuttleSpeed > 17000) {
   console.log("Alert! Escape Velocity Reached!")
} else if (shuttleSpeed < 8000){
   console.log("Alert! Cannot Maintain Orbit!")
} else {
   console.log("Stable Speed.")
}

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}