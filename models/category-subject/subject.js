const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;