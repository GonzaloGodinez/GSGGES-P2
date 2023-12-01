const User = require('./User');
const Book = require('./books');

User.hasMany(Book, {
  foreignKey: 'user_id',
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Book };
