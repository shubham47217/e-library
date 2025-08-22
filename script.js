const searchBar = document.getElementById("searchBar");
const bookList = document.getElementById("bookList");
const books = bookList.getElementsByClassName("book");

searchBar.addEventListener("keyup", function(e) {
  let text = e.target.value.toLowerCase();

  Array.from(books).forEach(function(book) {
    let title = book.getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.indexOf(text) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
