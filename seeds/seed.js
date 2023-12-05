const sequelize = require('../config/connection');
const { Book, User } = require('../models');
const { get_book } = require('../utils/helpers')

const userData = require('./userData.json');
const bookData = require('./bookData.json');

console.log(get_book('the lord of the rings'))

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);

  for (const book of bookData) {
    await Book.create({
      ...book,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
