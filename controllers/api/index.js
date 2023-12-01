const router = require('express').Router();
const bookRoutes = require('./bookRoutes.js');
const userRoutes = require('./userRoutes');
const reviewRoute = require('./reviewRoute');

router.use('/book', bookRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoute);

module.exports = router;
