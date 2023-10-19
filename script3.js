console.log("( Exo 3 )");

function calculateAveragePages(books) {
  const pagesArray = books.map((book) => book.pages);

  const totalPages = pagesArray.reduce((sum, pages) => sum + pages, 0);

  const averagePages = totalPages / books.length;

  return averagePages;
}

const books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K rowling",
    pages: 223,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K rowling",
    pages: 251,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K rowling",
    pages: 317,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K rowling",
    pages: 636,
  },
];

const averagePages = calculateAveragePages(books);
console.log(books);
console.log("- The average number of pages is:", averagePages);
