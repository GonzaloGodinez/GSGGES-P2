const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'romance' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'adventure' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'romance' },
    // Add more books with different genres
  ];
  
  // Function to render filtered books based on selected genre
  function renderFilteredBooks(selectedGenre) {
    const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);
    const bookList = document.querySelector('.filtered-books');
    bookList.innerHTML = ''; // Clear previous books
  
    filteredBooks.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('row', 'mb-2');
      bookDiv.innerHTML = `
        <div class="col-md-8">
          <h4><a href="/book/${book.id}">${book.title}</a> by ${book.author}</h4>
          <p>Genre: ${book.genre}</p>
        </div>
      `;
      bookList.appendChild(bookDiv);
    });
  }
  
  // Event listener for genre selection change
  const genreFilterSelect = document.getElementById('book-genre-filter');
  genreFilterSelect.addEventListener('change', function () {
    const selectedGenre = this.value;
    renderFilteredBooks(selectedGenre);
  });
  
  // Initial render with all books
  renderFilteredBooks('all');
  