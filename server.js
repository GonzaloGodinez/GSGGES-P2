const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const cloudinary = require('cloudinary').v2

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// Setup cloudinary server
cloudinary.config({ 
  cloud_name: 'dtc03w2me', 
  api_key: '665518628271374', 
  api_secret: 'aMSy9ADGX_AQbKFumx1KxbQkB-4' 
});
// images to add
const images = [
  "./images/1984.jpg",
  "./images/brave-new-world.jpg",
  "./images/echoes-of-eternity.jpg",
  "./images/frankenstein.jpg",
  "./images/jane-eyre.jpg",
  "./images/moby-dick.jpg",
  "./images/one-hundred-years-of-solitude.jpg",
  "./images/pride-and-prejudice.jpg",
  "./images/the-catcher-in-the-rye.webp",
  "./images/the-chronicles-of-narnia.jpg",
  "./images/The-Grapes-of-Wrath.jpg",
  "./images/the-great-gatsby.jpg",
  "./images/the-hitchhikers-guide-to-the-galaxy.jpg",
  "./images/the-hobbit.jpg",
  "./images/the-lord-of-the-rings.jpg",
  "./images/the-odyssey.jpg",
  "./images/the-road.jpg",
  "./images/the-shining.jpg",
  "./images/to-kill-a-mockingbird.webp",
  "./images/to-the-lighthouse.jpg",
  "./images/wuthering-heights.jpg",
];

// Function to upload images to Cloudinary
const uploadImages = () => {
  // Loop through each image path
  images.forEach((imagePath) => {
    const publicId = imagePath.split("/").pop().split(".")[0]; // Extracting public_id from the file path

    // Upload image to Cloudinary
    cloudinary.uploader.upload(imagePath, { public_id: publicId }, (error, result) => {
      if (error) {
        console.error(`Error uploading ${imagePath}:`, error);
      } else {
        console.log(`Upload successful for ${imagePath}:`, result);
      }
    });
  });
};

// Call the function to upload images
uploadImages();

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.get('/js/genre.js', function(req, res) {
  res.type('application/javascript');
  res.sendFile(__dirname + '/js/genre.js');
});