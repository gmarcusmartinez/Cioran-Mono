const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title."],
    unique: true,
    trim: true,
    maxlength: [50, "Title can not be more than 50 charachters"]
  },
  description: {
    type: String,
    required: [true, "Please add a description."],

    trim: true,
    maxlength: [500, "Description can not be more than 500 charachters"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Project", ProjectSchema);
