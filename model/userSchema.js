const mongoose = require('mongoose');

const user = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
};

const UserSchema = new mongoose.Schema(user);
module.exports = mongoose.model('User', UserSchema);
