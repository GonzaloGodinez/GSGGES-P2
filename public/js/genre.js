const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
    genre: "Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/to-kill-a-mockingbird.webp",
    user_id: null,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    genre: "Dystopian",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/1984.jpg",
    user_id: null,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    genre: "Classic",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/pride-and-prejudice.jpg",
    user_id: null,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    genre: "Classic",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-great-gatsby.jpg",
    user_id: null,
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    pages: 209,
    genre: "Modernist",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/to-the-lighthouse.jpg",
    user_id: null,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: 288,
    genre: "Dystopian",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/brave-new-world.jpg",
    user_id: null,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 224,
    genre: "Coming-of-Age",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-catcher-in-the-rye.webp",
    user_id: null,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    pages: 417,
    genre: "Magical-Realism",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/one-hundred-years-of-solitude.jpg",
    user_id: null,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
    genre: "Fantasy",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-lord-of-the-rings.jpg",
    user_id: null,
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    pages: 767,
    genre: "Fantasy",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-chronicles-of-narnia.jpg",
    user_id: null,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    pages: 635,
    genre: "Adventure",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/moby-dick.jpg",
    user_id: null,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    pages: 541,
    genre: "Epic-Poetry",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-odyssey.jpg",
    user_id: null,
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    pages: 532,
    genre: "Gothic-Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/jane-eyre.jpg",
    user_id: null,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pages: 193,
    genre: "Science-Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-hitchhikers-guide-to-the-galaxy.jpg",
    user_id: null,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 280,
    genre: "Gothic-Science-Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/frankenstein.jpg",
    user_id: null,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    pages: 464,
    genre: "Historical-Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/The-Grapes-of-Wrath.jpg",
    user_id: null,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    genre: "Fantasy",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-hobbit.jpg",
    user_id: null,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    pages: 342,
    genre: "Gothic-Fiction",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/wuthering-heights.jpg",
    user_id: null,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    pages: 447,
    genre: "Horror",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-shining.jpg",
    user_id: null,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    pages: 287,
    genre: "Post-Apocalyptic",
    image: "http://res.cloudinary.com/dtc03w2me/image/upload/the-road.jpg",
    user_id: null,
  },
];

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}