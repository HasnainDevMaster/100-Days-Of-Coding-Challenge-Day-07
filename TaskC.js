"use strict";
// 100 Days Of Coding Challenge!
// An array of book objects
const books = [
    {
        title: "The Enigma of Nebula",
        author: "Astrid Novak",
        genre: "Science Fiction",
    },
    {
        title: "Whispers in the Mist",
        author: "Evelyn Harper",
        genre: "Mystery",
    },
    {
        title: "Chronicles of Eldoria",
        author: "Liam Stone",
        genre: "Fantasy",
    },
];
// Print the list of books
console.log("Fictional Books:");
for (const book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
}
