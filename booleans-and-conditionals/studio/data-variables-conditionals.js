// Initialize Variables below
let date = ("Monday 2019-03-18");
let time = ("10:05:34 AM");
let astronautCount = 7;
let astronautStatus = ("ready");
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = ("100%");
let weatherStatus = ("Clear");
let preparedForLiftoff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut Count does not exceed 7");
    preparedForLiftoff = true;
}   else {
    console.log("Astronaut Count Exceeds 7")
    preparedForLiftoff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts are ready");
    preparedForLiftoff = true;
}   else {
    console.log("Astronauts not ready!")
    preparedForLiftoff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total Mass: ready");
    preparedForLiftoff = true
}   else {
    console.log("Total mass: Too heavy!");
    preparedForLiftoff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 && fuelTempCelsius < -150) {
    console.log("Fuel Temperature: Pass")
    preparedForLiftoff = true;
}   else {
    console.log("Fuel Temp: bad")
    preparedForLiftoff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === ("100%")) {
    console.log("Fuel Level: Full");
    preparedForLiftoff = true;
}   else {
    console.log("Check fuel");
    preparedForLiftoff = false
}
// add logic below to verify the weather status is clear
if (weatherStatus === "Clear") {
    console.log("Weather Status: All Clear");
    preparedForLiftoff = true;
}   else {
    console.log("Weather Status: not clear");
    preparedForLiftoff = false;
}
// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftoff === true) {
    console.log("All systems are a go! Initiating space shuttle launch sequence."); 
    console.log("Date:" , date + "\n" + "Time:" , time + "\n" + "Astronaut Count:" , astronautCount + "\n" + "Crew Mass:" , crewMassKg + "\n" + "Fuel Mass:" , fuelMassKg + "\n" + "Shuttle Mass:" , shuttleMassKg + "\n" + "Total Mass:" , totalMassKg + "\n" + "Fuel Temp:" , fuelTempCelsius + "\n" + "Weather Status:" , weatherStatus)
    console.log("\nHave a safe trip astronauts!");
}   else {
    console.log("Launch scrapped.");
}
