const router = require('express').Router();

const { Book, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render('homepage', {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['first_name'],
        },
      ],
    });

    const book = bookData ? bookData.get({ plain: true }) : null;

    res.render('book', {
      book,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData ? userData.get({ plain: true }) : null;

    res.render('profile', {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// clicking genre gets the books in that genre
router.get('/genre/:genre', async (req, res) => {
  try {
    const { genre } = req.params;

    const bookData = await Book.findAll({
      where: {
        genre: genre // Filter by the selected genre
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render('genre', {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
