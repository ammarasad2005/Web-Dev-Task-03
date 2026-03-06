const mongoose = require('mongoose');

// Simple schema for user
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const UserModel = mongoose.model('User', userSchema);

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async register() {
    // Save the user to the database
    const newUser = new UserModel({
      username: this.username,
      password: this.password
    });
    await newUser.save();
    return 'User registered successfully';
  }

  async login() {
    // Find user in the database
    const foundUser = await UserModel.findOne({
      username: this.username,
      password: this.password
    });
    if (foundUser) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = User;
