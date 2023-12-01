const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoute')
const reviewRoute = require('./reviewRoute')

router.use('/book', bookRoutes);
router.use('/users', userRoutes);
router.use('/review', reviewRoute);


module.exports = router;
