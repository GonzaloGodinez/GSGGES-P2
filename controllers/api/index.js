const router = require('express').Router();
const userRoute = require('./userRoutes');
const reviewRoute = require('./reviewRoute');
const bookRoute = require('./bookRoutes');
// const userbookRoute = require('./userbookRoute');

router.use('/book', bookRoute);
router.use('/user', userRoute);
router.use('/review', reviewRoute);

module.exports = router;
