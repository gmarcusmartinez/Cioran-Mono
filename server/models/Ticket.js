const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  sprint: {
    type: mongoose.Schema.ObjectId,
    ref: "Sprint",
  },
  title: {
    type: String,
    required: [true, "Please add a title."],
    trim: true,
    maxlength: [50, "Title can not be more than 50 charachters"],
  },
  type: {
    type: String,
    required: true,
    enum: ["feature", "bug", "tests", "task"],
  },
  status: {
    type: String,
    required: true,
    enum: ["unassigned", "assigned", "completed"],
    default: "unassigned",
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, "Description can not be more than 500 charachters"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  // assignedTo: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  // },
  // createdBy: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //   },
  storyPoints: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 5, 8, 13],
  },
  dateAssigned: {
    type: Date,
  },
  dateCompleted: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ticket", TicketSchema);
