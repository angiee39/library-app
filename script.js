let myLibrary = [];

let title;
let author;
let pages;
let read;

// let title, author, pages, read;

function Book(a, b, c, d) {
    // the Constructor
    this.title = a
    this.author = b
    this.pages = c
    this.read = d
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

// All querySelectors
const addDiv = document.querySelector('#addDiv')
const tableDiv = document.querySelector('#tableDiv')
const formDiv = document.querySelector('#formDiv')
const addBtn = document.querySelector("#addBtn")
const submit = document.querySelector("#submit")
const back = document.querySelector("#back")
const tr = document.querySelector('#tr')




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
    console.log(title, author, pages, read)
    console.log(myLibrary)
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]['title'])
        tr.innerHTML += '<tr>'
        tr.innerHTML += `   <td>${myLibrary[i]['title']}</td>`
        tr.innerHTML += `   <td>${myLibrary[i]['author']}</td>`
        tr.innerHTML += `   <td>${myLibrary[i]['pages']}</td>`
        tr.innerHTML += `   <td>${myLibrary[i]['read']}</td>`
        tr.innerHTML += '</tr>'
    
    }
    
    
});





