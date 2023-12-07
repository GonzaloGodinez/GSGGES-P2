const express = require('express');
const router = express.Router();
const { User, Book, UserBook } = require('../../models'); // Import User model
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password before storing it
    // const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await User.create({ name, email, password: hashedPassword });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ where: { email } });

    if (!userData) {
      // Handle if user not found
    } else {
      console.log('Hashed Password from Database:', userData.password);
      console.log('Password from User Input:', password);

      // Compare passwords using bcrypt
      const passwordMatch = await bcrypt.compare(password, userData.password);

      if (passwordMatch) {
        // Password matches, set session and respond with success message
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      } else {
        // Handle incorrect password
        res.status(400).json({ message: 'Incorrect password' });
      }
    }
  } catch (err) {
    // Handle other errors
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/add-book/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.session.user_id;

    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);

    if (!user || !book) {
      return res.status(404).json({ message: 'User or Book not found' });
    }

    // Create a UserBook entry to associate the user with the selected book
    const newBook = await UserBook.create({
      title: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages, // Adjust this based on your Book model
      user_id: userId,
    });

    res.status(200).json({ message: 'Book added to Read Next list' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/books-to-read', async (req, res) => {
  try {
    const userId = req.session.user_id; // Assuming user ID is stored in the session

    // Fetch books associated with the user from the database
    const userBooks = await UserBook.findAll({
      where: { user_id: userId },
      attributes: ['id', 'title', 'author', 'genre', 'pages'], // Select specific attributes you want to retrieve
    });

    res.status(200).json(userBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/remove-book/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.session.user_id; // Get the user ID from the session

    // Check if the book exists in the user's list
    const userBook = await UserBook.findOne({
      where: {
        id: bookId,
        user_id: userId,
      },
    });

    if (!userBook) {
      return res.status(404).json({ message: 'Book not found in user list' });
    }

    // Delete the book from the user's list
    await userBook.destroy();

    res.status(200).json({ message: 'Book removed from user list' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
