let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return
      Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return
      Math.floor(Math.random()*11)}
};


let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return
      Math.floor(Math.random()*11)}
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return
      Math.floor(Math.random()*11)}
};

let buggy = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return
      Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
function addAstronautId(obj, astronautID) {
   randomIdGenerator = Math.floor(Math.random() * 5) +1;
   obj[astronautID] = randomIdGenerator
   return obj;
}

addAstronautId(superChimpOne, "astronautID")
console.log(superChimpOne.astronautID);

addAstronautId(superChimpTwo, "astronautID")
console.log(superChimpOne.astronautID);

addAstronautId(doggo, "astronautID")
console.log(superChimpOne.astronautID);

addAstronautId(buggy, "astronautID")
console.log(superChimpOne.astronautID);

addAstronautId(salamander, "astronautID")
console.log(superChimpOne.astronautID);

// move() = {
//    let randomMove = Math.floor(Math.random()*11)
//    this.randomMove = 
// }

// Create an array to hold the animal objects.
let animalObjects = [superChimpOne, superChimpTwo, salamander, doggo, buggy];
console.log(animalObjects);
// Print out the relevant information about each animal.
for (item in animalObjects) {
   console.log(item + "," + animalObjects[item]);
}

// function crewReports(animalObjects){
//    return `${name} is a ${species}. They are ${age} years old and ${mass}.`
// }
// console.log(crewReports(doggo))
// Start an animal race!
function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  console.log(fitnessTest(animalObjects));