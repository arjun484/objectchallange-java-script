const library = [
  {
    title: "atomic habits",
    author: "james clear",
    Status:{
      own: true,
      reading:false,
      read:false
    }
  },
  {
    title: "Rich dad poor dad",
    author: "Robert T.",
    Status: {
      own: true,
      reading:false,
      read:false
    }
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    Status:  {
      own: true,
      reading:false,
      read:false
    }
  },
  {
    title: "Cant hurt me ",
    author: "David goggins",
    Status:  {
      own: true,
      reading:false,
      read:false
    }
  }
 
];
library.array.forEach(book => {
    book.status.read = true;
});
const [{ title: firstBook }] = library;

console.log(firstBook); 
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);



console.log(library);
