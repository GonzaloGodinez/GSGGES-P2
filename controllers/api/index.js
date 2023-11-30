const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');
const bookRoutes = require('./bookRoute.js')

router.use('/book', bookRoutes);
router.use('/users', userRoutes);
// router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
