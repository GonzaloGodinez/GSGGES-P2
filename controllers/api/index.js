const router = require('express').Router();
const userRoute = require('./userRoutes');
const reviewRoute = require('./reviewRoute');
const bookRoute = require('./bookRoutes');

router.use('/book', bookRoute);
router.use('/user', userRoute);
router.use('/review', reviewRoute);

module.exports = router;
