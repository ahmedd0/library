// variables
let bookName = document.querySelector(".name");
let authorName = document.querySelector(".author");
let btn = document.querySelector(".add");
let a = document.querySelector(".book-name");
let b = document.querySelector(".book-author");
let getStartingBtn = document.querySelector(".get-starting");
let addBookSection = document.querySelector(".add-book");
getStartingBtn.addEventListener("click", function () {
  addBookSection.style.transform = "translateX(0)";
});
// create Book class
class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
  // Empty input Values

  // create Book Object
  static createObj() {
    return new Book(bookName.value, authorName.value);
  }
  static showError() {
    let alert = document.querySelector(".alert");
    alert.classList.add("show");
    setInterval(function () {
      alert.classList.remove("show");
    }, 1000);
  }
  static emptyValues() {
    bookName.value = "";
    authorName.value = "";
  }
  static addBook(book) {
    if (bookName.value !== "" && authorName.value !== "") {
      let tr = document.createElement("TR");
      let tdName = document.createElement("td");
      let tdAuthor = document.createElement("td");
      let tdClose = document.createElement("td");
      let txtName = document.createTextNode(book.name);
      let txtAuthor = document.createTextNode(book.author);
      let booklist = document.querySelector(".booklist");
      let closei = document.createElement("I");
      tdName.appendChild(txtName);
      tdAuthor.appendChild(txtAuthor);
      tdClose.appendChild(closei);
      tr.appendChild(tdName);
      tr.appendChild(tdAuthor);
      tr.appendChild(tdClose);
      closei.classList = "fas fa-times";
      tdClose.classList.add("rm");
      booklist.appendChild(tr);

      this.emptyValues();
    } else {
      this.showError();
    }
  }
  // Remove Book
  static removeBook(e) {
    if (e.target.classList.contains("fa-times")) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    }
  }
}
//========================== Events =================================
btn.addEventListener("click", function () {
  Book.addBook(Book.createObj());
  bookName.focus();
});
authorName.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    Book.addBook(Book.createObj());
    bookName.focus();
  }
});
bookName.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    if (authorName.value !== "") {
      Book.addBook(Book.createObj());
    } else {
      authorName.focus();
    }
  }
});
// remove book
let rm = document.querySelector(".rm");
document.querySelector("body").addEventListener("click", function (e) {
  Book.removeBook(e);
});
