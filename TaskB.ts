// 100 Days Of Coding Challenge!

/** Question 20:
 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// An array of beautiful landscapes
let landscapes: string[] = [
  "Rhossili Bay, Gower peninsula, Wales", // Golden sand, cliffs, and Worm's Head
  "Vestrahorn, Stokksnes peninsula, Iceland", // Towering mountain by a lagoon and black sand beach
  "The Pitons, Soufriere, St. Lucia", // Twin peaks rising from the Caribbean Sea
  "Denali National Park and Preserve, Alaska", // North America's tallest peak
];

// Print the list of landscapes
console.log("Beautiful Landscapes:");
for (const landscape of landscapes) {
  console.log(landscape);
}
