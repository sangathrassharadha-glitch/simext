function addBook() {
    let book = document.getElementById("book").value;

    if (book == "") {
        alert("Enter book name");
    } else {
        let li = document.createElement("li");
        li.innerHTML = book;
        document.getElementById("list").appendChild(li);
    }
}