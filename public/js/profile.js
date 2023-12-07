

  function dropMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Function to render filtered books based on selected genre
  function renderFilteredBooks(selectedGenre) {
    const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);
    const bookList = document.querySelector('.book-list');
  
    bookList.innerHTML = '';
  
    filteredBooks.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('row', 'mb-2');
      bookDiv.innerHTML = `
        <div class="col-md-8">
          <h4><a href="/book/${book.id}">${book.title}</a> by ${book.author}</h4>
          <p>Genre: ${book.genre}</p>
          <button class="btn btn-primary add-book" data-id="${book.id}">Add</button>
        </div>
      `;
      bookList.appendChild(bookDiv);
    });
  
    console.log("Filtered Books:", filteredBooks); // Log the filtered books
  }
  
  // Add event listener to handle genre selection
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
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
document.querySelectorAll('.add-book').forEach(button => {
  button.addEventListener('click', async function() {
    const bookId = this.getAttribute('data-id');
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

        if (response.ok) {
          alert('Book added to your list!');
        } else {
          alert('Failed to add book to your list.');
        }
      } catch (error) {
        console.error('Error adding book:', error);
      }
    } else {
      console.error('Book details not found.');
    }
  });
});
