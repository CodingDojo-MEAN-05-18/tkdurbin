const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema(
  {
    answer: {
      type: String,
      required: [true, 'provide a question'],
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Answer', answerSchema);
