class Book {
  constructor({ title, author, borrowed }) {
    this.title = title;
    this.author = author;
    this.borrowed = borrowed;
  }
}

const book1 = new Book({
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  borrowed: false,
});

console.log(book1);

class Library {
  #books = [];

  addBook(title, author) {
    const book = new Book({ title, author });
    this.#books.push(book);
  }
  removeBook(book) {
    this.#books = this.#books.filter((b) => b.title !== book.title);
  }
  borrowBook(book) {
    const foundBook = this.#books.find((b) => b.title === book.title);
    if (foundBook) {
      foundBook.borrowed = true;
    }
  }
  returnBook(book) {
    const foundBook = this.#books.find((b) => b.title === book.title);
    if (foundBook) {
      foundBook.borrowed = false;
    }
  }
  findbook(title) {
    value = this.#books.findIndex((b) => b.title === title);
    if (value === undefined) {
      console.log("Book not found");
    } else {
      console.log(value.i);
    }
  }
}

const library = new Library();
