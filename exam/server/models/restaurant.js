const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'provide a restaurant name'],
      trim: true,
    },

    cuisine: {
      type: String,
      required: [true, 'provide a cuisine'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
