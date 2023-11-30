const User = require('./User');
const Book = require('./books');

User.hasMany(Book, {
  foreignKey: 'id',
});

Book.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, Book };
