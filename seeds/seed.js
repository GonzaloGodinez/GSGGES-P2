const sequelize = require('../config/connection');
const { Book, User, Review } = require('../models');
const { get_book } = require('../utils/helpers')
const bcrypt = require('bcrypt');
const userData = require('./userData.json');
const bookData = require('./bookData.json');
const reviewData = require('./reviewData.json');

// console.log(get_book('the lord of the rings'))

userData.map(async (user)=> {
let hashPass = await bcrypt.hash(user.password, 10)
console.log(hashPass);
})
// console.log(userData[1]);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const book of bookData) {
    await Book.create({
      ...book,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();