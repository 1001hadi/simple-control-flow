const pi = 3.1415;
const radius = 5;
const area = pi * radius ** 2;
const planetSpace = 0.8;
const startPlants = 20;
const plantsLimit = area / planetSpace;

let week = 1;
let weeklyPlant = startPlants * 2;
let percentage = ((weeklyPlant / plantsLimit) * 100).toFixed(2);

if (percentage >= 80) {
  console.log(`week ${week}: ${percentage}%  full - prune`);
} else if (percentage >= 50) {
  console.log(`Week ${week}: ${weeklyPlant}% full - monitor`);
} else {
  console.log(`Week ${week}: ${percentage}% full - plant more`);
}

// Week2

const week2 = 2;
const weeklyPlant2 = weeklyPlant * 2;
const percentage2 = ((weeklyPlant2 / plantsLimit) * 100).toFixed(2);

if (percentage2 >= 80) {
  console.log(`week ${week2}: ${percentage2}%  full - prune`);
} else if (percentage2 >= 50 && percentage2 < 80) {
  console.log(`Week ${week2}: ${weeklyPlant2}% full - monitor`);
} else {
  console.log(`Week ${week2}: ${percentage2}% full - plant more`);
}

// Week 3

const week3 = 3;
const weeklyPlant3 = weeklyPlant2 * 2;
const percentage3 = ((weeklyPlant3 / plantsLimit) * 100).toFixed(2);

if (percentage3 >= 80) {
  console.log(
    `week ${week3}: ${percentage3}%  full - prune and stop planting!`
  );
} else if (percentage3 >= 50 && percentage3 < 80) {
  console.log(`Week ${week3}: ${weeklyPlant3}% full - monitor`);
} else {
  console.log(`Week ${week3}: ${percentage3}% full - plant more`);
}

////////////
// Week 10

const week10 = 10;
let weekTenStartPlants = 100;

try {
  if (weekTenStartPlants * planetSpace > area) {
    console.log("Warning!!!, Number of plants exceeds the available space.");
  }

  //  10 week plants total with loop
  for (let i = 0; i < week10; i++) {
    weekTenStartPlants *= 2;
  }
  console.log(
    `At the end of week 10, plants grow will be: ${weekTenStartPlants}`
  );

  const requiredSpace = weekTenStartPlants * planetSpace;
  const additionalSpace = (requiredSpace - area).toFixed(2);

  console.log(`Week 10 required space: ${requiredSpace} square meters.`);
  console.log(
    `Week 10 additional space needed : ${additionalSpace} square meters .`
  );

  //   Calculate the radius of week 10 // This part idea comes from "stack overflow" !!!
  const newRadius = Math.sqrt(requiredSpace / pi).toFixed(2);
  console.log(
    `The radius of 10 weeks of planting going to be: ${newRadius} meters.`
  );
} catch (err) {
  console.log(err);
}
