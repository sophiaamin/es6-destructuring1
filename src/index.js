import animals from "./data";

console.log(animals);

// destructuring array - returns 1st and 2nd object
const [cat, dog] = animals;
// console.log(cat);

// destructuring the object's properties
// const { name, sound } = cat;
// console.log(sound);

// alternative name for property key from the object cat
// const { name: catName, sound: catSound } = cat;
// console.log(catName);

// Setting default value for keys when they are undefined
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);

// Added a nested objected
// const {name, sound, feedingRequirements} = cat;
// console.log(feedingRequirements);

// Destructuring an nested object (put the values of the properties)
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;
// console.log(food);
