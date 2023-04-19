let myLibrary= [];

function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

Book.prototype.getInfo = function() {
    return `${this.Title} by ${this.Author}, ${this.Pages}, ${this.Read}`;
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 200, "read");
const thud = new Book("Thud!", "Terry Pratchett", 439, "read");
const revenant = new Book("Revenant Gun", "Yoon Ha Lee", 427, "not read");

myLibrary.push(hobbit,thud,revenant);

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

function displayBooksOnShelf() {
    for (const book of myLibrary) {
        const bookNode = document.createElement("div");
        bookNode.className = "bookCard";
        bookNode.innerText = book.getInfo();
        document.getElementById("libraryShelf").appendChild(bookNode);
        console.log(bookNode);
    }
}