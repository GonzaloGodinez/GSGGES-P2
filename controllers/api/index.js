const router = require('express').Router();
const bookRoute = require('./bookRoutes.js');
const userRoute = require('./userRoutes');
const reviewRoute = require('./reviewRoute');

router.use('/book', bookRoute);
router.use('/user', userRoute);
router.use('/review', reviewRoute);

module.exports = router;
