let myLibrary= [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }

    toggleRead() {
        if (this.read == "Yes") {
            this.read = "No";
            return;
        }
        if (this.read == "No") {
            this.read = "Yes";
            return;
        }
    }
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 200, "Yes");
const thud = new Book("Thud!", "Terry Pratchett", 439, "Yes");
const revenant = new Book("Revenant Gun", "Yoon Ha Lee", 427, "No");

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
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";

        const bookInfo = document.createElement("div");
        bookInfo.className = "bookInfo";
        bookInfo.innerText = book.getInfo();
        bookCard.appendChild(bookInfo);
        
        const bookRemove = document.createElement("button");
        bookRemove.innerText = "Remove";
        bookRemove.className = "bookRemoveButton";
        bookRemove.dataset.index = myLibrary.indexOf(book);
        bookCard.appendChild(bookRemove);

        let toggleHtml = "<input type=\"checkbox\" id=\"toggle\"";
        if (book.Read == "Yes") {
            toggleHtml += " checked";
        }
        toggleHtml += "/><label for=\"toggle\">Read</label>";
        const bookToggle = document.createElement("div");
        bookToggle.className = "bookToggleButton";
        bookToggle.innerHTML = toggleHtml;
        bookToggle.dataset.index = myLibrary.indexOf(book);
        bookCard.appendChild(bookToggle);

        libraryShelfNode.appendChild(bookCard);
    }

    for (const removeButton of document.querySelectorAll(".bookRemoveButton")) {
        removeButton.addEventListener("click", () => { removeBookFromShelf(removeButton); });
    }

    for (const toggleButton of document.querySelectorAll(".bookToggleButton")) {
        toggleButton.addEventListener("click", () => { toggleButtonClick(toggleButton); });
    }
}

function removeBookFromShelf(removeButton) {
    const bookIndex = removeButton.dataset.index;
    myLibrary.splice(bookIndex, 1);
    displayBooksOnShelf();
}

function toggleButtonClick(toggleButton) {
    const toggleIndex = toggleButton.dataset.index;
    myLibrary[toggleIndex].toggleRead();
    //Not toggling correctly- still returns as Yes
}

function formPopUp() {
    document.getElementById("bookFormPopup").style.display = "block";
    console.log("hi");
}

function closeForm() {
    document.getElementById("bookFormPopup").style.display = "none";
}
