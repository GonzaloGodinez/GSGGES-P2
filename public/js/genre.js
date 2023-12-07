// const books = [
//   { id: 1, title: 'Book 1', author: 'Author 1', genre: 'romance' },
//   { id: 2, title: 'Book 2', author: 'Author 2', genre: 'adventure' },
//   { id: 3, title: 'Book 3', author: 'Author 3', genre: 'romance' },
//   // Add more books with different genres
// ];

// // Function to render filtered books based on selected genre
// function renderFilteredBooks(selectedGenre) {
//   const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);
//   const bookList = document.querySelector('.filtered-books');
//   bookList.innerHTML = ''; // Clear previous books

//   filteredBooks.forEach(book => {
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('row', 'mb-2');
//     bookDiv.innerHTML = `
//         <div class="col-md-8">
//           <h4><a href="/book/${book.id}">${book.title}</a> by ${book.author}</h4>
//           <p>Genre: ${book.genre}</p>
//         </div>
//       `;
//     bookList.appendChild(bookDiv);
//   });
// }

// // Initial render with all books
// renderFilteredBooks('all');

// function dropMenu() {
//   document.getElementById("dropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// document.querySelector('dropbtn').onclick = function(event) {
//   console.log("hello")
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }