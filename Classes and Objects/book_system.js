let books = [];
  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Please fill in all fields correctly.');
            }
        };
        function showbooks(){
            const booksDiv  = books.map((item,index)=>
                `<h1>>Book Number : ${index + 1}</h1>
                 <p><strong>Book Name </strong>: ${item.name}</p>
                 <p><strong>Author Name </strong>: ${item.authorName}</p>
                 <p><strong>Description </strong>: ${item.bookDescription}</p>
                 <p><strong>Pages number  </strong>: ${item.pagesNumber}</p>
                 <button onclick="editbook(${index})">Edit</button>`
            )
            document.getElementById("books").innerHTML = booksDiv.join("");
        };
function clearInputs(){
    document.getElementById('bookName').value="";
    document.getElementById('authorName').value="";
    document.getElementById('bookDescription').value="";
    document.getElementById('pagesNumber').value="0";
};
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }
