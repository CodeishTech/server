const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  subject: {
    type: String,
    required: true,
  },
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;