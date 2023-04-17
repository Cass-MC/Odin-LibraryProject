let myLibrary= [];

function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

Book.prototype.getInfo = function() {
    console.log(`${this.Title} by ${this.Author}, ${this.Pages}, ${this.Read}`)
}

//const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 200, "read");
//const thud = new Book("Thud!", "Terry Pratchett", 439, "read");
//const revenant = new Book("Revenant Gun", "Yoon Ha Lee", 427, "not read");

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}