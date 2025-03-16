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

let week2 = 2;
let weeklyPlant2 = weeklyPlant * 2;
let percentage2 = ((weeklyPlant2 / plantsLimit) * 100).toFixed(2);

if (percentage2 >= 80) {
  console.log(`week ${week2}: ${percentage2}%  full - prune`);
} else if (percentage2 >= 50 && percentage2 < 80) {
  console.log(`Week ${week2}: ${weeklyPlant2}% full - monitor`);
} else {
  console.log(`Week ${week2}: ${percentage2}% full - plant more`);
}

// Week 3

let week3 = 3;
let weeklyPlant3 = weeklyPlant2 * 2;
let percentage3 = ((weeklyPlant3 / plantsLimit) * 100).toFixed(2);

if (percentage3 >= 80) {
  console.log(
    `week ${week3}: ${percentage3}%  full - prune and stop planting!`
  );
} else if (percentage3 >= 50 && percentage3 < 80) {
  console.log(`Week ${week3}: ${weeklyPlant3}% full - monitor`);
} else {
  console.log(`Week ${week3}: ${percentage3}% full - plant more`);
}
