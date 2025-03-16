const pi = 3.1415;
const radius = 5;
const area = pi * radius ** 2;
const planetSpace = 0.8;
const startPlants = 20;
const plantsLimit = area / planetSpace;
// console.log(plantsLimit);

let week = 1;
let weeklyPlant = startPlants * 2 ** week;
let percentage = ((weeklyPlant / plantsLimit) * 100).toFixed(2);

if (percentage >= 80) {
  console.log(`week ${week}: ${percentage}%  full - prune`);
} else if (percentage >= 50) {
  console.log(`Week ${week}: ${weeklyPlant}% full - monitor`);
} else {
  console.log(`Week ${week}: ${percentage}% full - plant more`);
}

// let week2 = 2;
// let weeklyPlant2 = startPlants * 2 ** week2;
// let percentage2 = ((weeklyPlant2 / plantsLimit) * 100).toFixed(2);

// if (percentage >= 80) {
//   console.log(`week ${week2}: ${percentage}%  full - prune`);
// } else if (percentage >= 50) {
//   console.log(`Week ${week2}: ${weeklyPlant}% full - monitor`);
// } else {
//   console.log(`Week ${week2}: ${percentage}% full - plant more`);
// }
