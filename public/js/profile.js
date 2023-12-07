const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

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
  
  // Handle click on the "Add" button for each book
  document.querySelectorAll('.add-book').forEach(button => {
    button.addEventListener('click', async function() {
      const bookId = this.getAttribute('data-id');
  
      try {
        const response = await fetch(`/api/users/add-book/${bookId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // If required, include additional data in the body
          // For example, user ID or any other relevant information
          body: JSON.stringify({
            // Include any necessary data for the request
          })
        });
  
        if (response.ok) {
          alert('Book added to your list!');
        } else {
          // Handle the case where the addition failed
          alert('Failed to add book to your list.');
        }
      } catch (error) {
        // Handle any network errors or exceptions
        console.error('Error adding book:', error);
      }
    });
  });
