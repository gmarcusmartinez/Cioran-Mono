const mongoose = require("mongoose");
const slugify = require("slugify");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title."],
    unique: true,
    trim: true,
    maxlength: [50, "Title can not be more than 50 charachters"]
  },
  slug: String,
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

ProjectSchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Project", ProjectSchema);
