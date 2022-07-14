const mongoose = require('mongoose');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lName :{ 
    type: String,
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    minlength:[3,'username length is too shhort'],
  },
  email: { 
    type: String,
    required: [true, 'Email is required'],
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength:8,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;