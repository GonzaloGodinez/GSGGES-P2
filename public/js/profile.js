// Add event listener to handle genre selection
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function () {
    const selectedGenre = this.getAttribute('href').split('/').pop();
    console.log("Selected Genre:", selectedGenre); // Log the selected genre
    renderFilteredBooks(selectedGenre);
  });
});


function getUserIdFromSession() {
  // Logic to retrieve the user ID from the session
  // For example:
  return sessionStorage.getItem('userId'); // Retrieving the user ID stored in session storage
}

const userId = getUserIdFromSession(); // Function to get the user ID from the session

// Handle click on the "Add" button for each book
document.addEventListener('click', async function(event) {
  if (event.target.classList.contains('add-book')) {
    const bookId = event.target.dataset.id;
    const bookDetails = books.find(book => book.id === parseInt(bookId));

    if (bookDetails) {
      try {
        const response = await fetch(`/api/users/add-book/${bookId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: userId,
            bookId: bookId,
            title: bookDetails.title,
            author: bookDetails.author,
            genre: bookDetails.genre
          })
        });
document.querySelectorAll('.add-book').forEach(button => {
  button.addEventListener('click', async function () {
    console.log(this.getAttribute('data-id'))
    const bookId = this.getAttribute('data-id');

    try {
      const response = await fetch(`/api/users/add-book/${bookId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          bookId: bookId,
        })
      });

      if (response.ok) {
        alert('Book added to your list!');
      } else {
        alert('Failed to add book to your list.');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }
});

window.addEventListener('load', async function(event) {
  try {
    const response = await fetch('/api/users/books-to-read');
    if (response.ok) {
      const userBooks = await response.json();
      const bookList = document.querySelector('.book-list');

      // Clear existing content in the "Books to Read" section
      bookList.innerHTML = '';

      // Loop through user books and append them to the DOM
      userBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('row', 'mb-2');
        bookDiv.innerHTML = `
          <div class="col-md-8">
            <h4><a href="/book/${book.id}">${book.title}</a> by ${book.author}</h4>
            <p>Genre: ${book.genre}</p>
          </div>
          <div class="col-md-4">
            <button class="btn btn-sm btn-danger remove-book" data-id="${book.id}">REMOVE</button>
          </div>
        `;
        bookList.appendChild(bookDiv);
      });
    } else {
      console.error('Failed to fetch books:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching books:', error);
  }
=======
  })
});

document.addEventListener('click', async function(event) {
  if (event.target.classList.contains('btn-danger')) {
    const bookIdToRemove = event.target.dataset.id;

    try {
      const response = await fetch(`/api/users/remove-book/${bookIdToRemove}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        // Additional data to send, if needed
      });

      if (response.ok) {
        // If the book is successfully removed from the backend, remove it from the UI
        event.target.closest('.row').remove();
      } else {
        // Handle the case where removal from the backend failed
        console.error('Failed to remove book:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error removing book:', error);
    }
  }
});

