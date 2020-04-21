const mongoose = require("mongoose");

const SprintSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
  },
  title: {
    type: String,
    required: [true, "Please add a title."],
    trim: true,
    maxlength: [50, "Title can not be more than 50 charachters"],
  },
  objective: {
    type: String,
    trim: true,
    maxlength: [140, "Objective can not be more than 400 charachters"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  totalStoryPoints: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    // default: Date.now,
  },
  endDate: {
    type: Date,
    // default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sprint", SprintSchema);
