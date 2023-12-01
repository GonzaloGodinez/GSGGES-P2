const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoute = require('./reviewRoute');
const bookRoutes = require('./bookRoute.js')

router.use('/book', bookRoutes);
router.use('/users', userRoutes);
router.use('/userbook', reviewRoute);

module.exports = router;
