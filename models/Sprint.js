const mongoose = require("mongoose");

const SprintSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project"
  },
  title: {
    type: String,
    required: [true, "Please add a title."],
    trim: true,
    maxlength: [50, "Title can not be more than 50 charachters"]
  },
  description: {
    type: String,
    required: [true, "Please add a description."],

    trim: true,
    maxlength: [500, "Description can not be more than 500 charachters"]
  },
  totalStoryPoints: {
    type: Number
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Sprint", SprintSchema);
