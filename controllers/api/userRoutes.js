const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // Import User model
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
    const { first_name, email, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await User.create({ first_name, email, password: hashedPassword });

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


module.exports = router;
