// 100 Days Of Coding Challenge!

/** Question 21:
 Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

//------------------------------------------------------------------------------------------

// Define a type for a book
type Book = {
  title: string;
  author: string;
  genre: string;
};

// An array of book objects
const books: Book[] = [
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
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`
  );
}
