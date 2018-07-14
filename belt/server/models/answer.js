const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema(
  {
    author: {
      type: String,
      trim: true,
    },
    answer: {
      type: String,
      required: [true, 'provide a question'],
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    likes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Answer', answerSchema);
