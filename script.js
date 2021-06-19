let myLibrary = [{ title: "Harry Potter 1", author: "J.K. Rowling", pages: "567", read: "Read" }];

let title;
let author;
let pages;
let read;

// Book constructor
function Book(a, b, c, d) {
    this.title = a
    this.author = b
    this.pages = c
    this.read = d
}

// Add book to library
function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

// Remove book from librar
function removeBook(a) {
    myLibrary.splice(a, 1)
    showTable()
}

// Toggle read/unread
function toggleRead (a) {
    if (myLibrary[a]['read'] === 'Read') {
        myLibrary[a]['read'] = 'Unread'
    } else {
        myLibrary[a]['read'] = 'Read'
    }
    showTable()
}

// Print table
function showTable() {
    tbody.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        tbody.innerHTML += '<tr><td>' + myLibrary[i]['title'] + '</td><td>' + myLibrary[i]['author'] 
        + '</td><td>' + myLibrary[i]['pages'] + `</td><td id="read${i}">` + myLibrary[i]['read'] + `</td><td id="book${i}">Delete</td></tr>`;
    }
    readyRemove()
    readyRead()
}


// All querySelectors
const addDiv = document.querySelector('#addDiv')
const tableDiv = document.querySelector('#tableDiv')
const formDiv = document.querySelector('#formDiv')
const addBtn = document.querySelector("#addBtn")
const submit = document.querySelector("#submit")
const back = document.querySelector("#back")
const tbody = document.querySelector('#tbody')


// All eventListners
addBtn.addEventListener('click', () => {
    addDiv.classList.add('hide')
    tableDiv.classList.add('hide')
    formDiv.classList.remove('hide')
});

back.addEventListener('click', () => {
    addDiv.classList.remove('hide')
    tableDiv.classList.remove('hide')
    formDiv.classList.add('hide')
});

submit.addEventListener('click', () => {
    title = document.getElementById("title").value
    author = document.getElementById("author").value
    pages = document.getElementById("pages").value
    read = document.getElementById("read").value
    addBookToLibrary()
    addDiv.classList.remove('hide')
    tableDiv.classList.remove('hide')
    formDiv.classList.add('hide')
    showTable()
});

showTable()

function readyRemove() {
    // Listen for delete buttons
    let elements = [];

    for (let i = 0; i < myLibrary.length; i++) {
        elements.push(document.querySelector(`#book${i}`))
        elements[i].addEventListener('click', () => {
            removeBook(i)
        });
    }
}

function readyRead() {
    // Listen for read/unread buttons
    let elements = [];

    for (let i = 0; i < myLibrary.length; i++) {
        elements.push(document.querySelector(`#read${i}`))
        elements[i].addEventListener('click', () => {
            toggleRead(i)
        });
    }
}


