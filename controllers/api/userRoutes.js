const router = require('express').Router();
const { User } = require('../../models');

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



router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log('user: ', userData)

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log('valid: ', validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
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
    const userId = req.session.user_id; // Assuming you have the user ID in the session

    // Find the user by ID
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Find the book by ID
    const book = await Book.findByPk(bookId);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    // Add the book to the user's 'Read Next' list
    await user.addBook(book);

    res.status(200).json({ message: 'Book added to Read Next list' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
