const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
