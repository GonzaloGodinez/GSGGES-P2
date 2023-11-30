const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./bookRoute');
const commentRoutes = require('./userbookRoute');

router.use('/users', userRoutes);
router.use('/book', bookRoutes);
router.use('/userbook', userbookRoute);

module.exports = router;
