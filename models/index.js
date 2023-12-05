const User = require('./User');
const Book = require('./book');
const Review = require('./review');

User.hasMany(Book, {
  foreignKey: 'user_id',
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});
Review.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Book.hasMany(Review, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Book, Review };
