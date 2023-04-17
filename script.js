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


function addBookToLibrary() {

}