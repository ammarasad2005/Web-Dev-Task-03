const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
