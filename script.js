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

window.onload = displayBooksOnShelf;

function addBookToLibrary() {
    const title = document.getElementById("book_title").value;
    const author = document.getElementById("book_author").value;
    const pages = document.getElementById("book_pages").value;
    const readNode = document.getElementById("book_status");
    const read = readNode.options[readNode.selectedIndex].text;
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooksOnShelf();
    closeForm();
}

function displayBooksOnShelf() {
    const libraryShelfNode = document.getElementById("libraryShelf");
    //clear so it doesn't do duplicates
    while (libraryShelfNode.firstChild) {
        libraryShelfNode.removeChild(libraryShelfNode.firstChild);
    }

    for (const book of myLibrary) {
        const bookNode = document.createElement("div");
        bookNode.className = "bookCard";
        bookNode.innerText = book.getInfo();
        bookNode.dataset.index = myLibrary.indexOf(book);
        const bookRemove = document.createElement("button");
        bookRemove.innerText = "Remove";
        bookRemove.className = "bookRemoveButton";
        bookNode.appendChild(bookRemove);
        libraryShelfNode.appendChild(bookNode);
    }
}

function formPopUp() {
    document.getElementById("bookFormPopup").style.display = "block";
    console.log("hi");
}

function closeForm() {
    document.getElementById("bookFormPopup").style.display = "none";
}

//Look at this: https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html