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
  })
});
