const router = require('express').Router();

const userRoute = require('./userRoutes');
const bookRoute = require('./bookRoute');
const userbookRoute = require('./userbookRoute');

// const postRoutes = require('./postRoute');
// const commentRoutes = require('./commentRoute');

router.use('/users', userRoute);
router.use('/book', bookRoute);
router.use('/userbook', userbookRoute);

// router.use('/post', postRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;
