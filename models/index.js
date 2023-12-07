const User = require('./User');
const Book = require('./book');
const Review = require('./review');
const UserBook = require('./userBook'); // Corrected the path

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

UserBook.belongsTo(User, { 
  foreignKey: 'user_id', 
});

UserBook.belongsTo(Book, { 
  foreignKey: 'book_id', 
});



module.exports = { User, Book, Review, UserBook};
