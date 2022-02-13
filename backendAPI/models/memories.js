const mongoose = require('mongoose');

const memoriesSchema = new mongoose.Schema({
  userID: String,
  title: String,
  des: String,
  date: Date,
  mediaURL: String
});

module.exports = mongoose.model("memory", memoriesSchema);
