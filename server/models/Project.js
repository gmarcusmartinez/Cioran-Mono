const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title."],
    unique: true,
    trim: true,
    maxlength: [40, "Title can not be more than 40 charachters"],
  },
  photo: {
    type: String,
    default: "no-image.jpg",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
