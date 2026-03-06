const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./User');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  try {
    const message = await user.register();
    res.send(message);
  } catch (err) {
    res.send('Error registering user');
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  try {
    const success = await user.login();
    if (success) {
      req.session.user = username;
      res.send('Login successful');
    } else {
      res.send('Invalid username or password');
    }
  } catch (err) {
    res.send('Error logging in');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
