const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
    required: true
  },
  rating: { type: Number, required: true },
  comment: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
