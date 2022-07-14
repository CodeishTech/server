const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  subject: {
    type: String,
    required: true,
  },
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;