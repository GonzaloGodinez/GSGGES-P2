const sequelize = require('../config/connection');
const { Book, User } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(users)

  for (const book of bookData) {
    await Book.create({
      ...book,
    });
  }

  process.exit(0);
};

seedDatabase();
