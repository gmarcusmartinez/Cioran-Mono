const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  sprint: {
    type: mongoose.Schema.ObjectId,
    ref: 'Sprint',
  },
  title: {
    type: String,
    required: [true, 'Please add a title.'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 charachters'],
  },
  type: {
    type: String,
    required: true,
    enum: ['feature', 'bug', 'tests', 'task'],
  },
  status: {
    type: String,
    required: true,
    enum: ['unassigned', 'assigned', 'completed'],
    default: 'unassigned',
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description can not be more than 500 charachters'],
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

TicketSchema.statics.getTotalStoryPoints = async function (sprintId) {
  const obj = await this.aggregate([
    {
      $match: { sprint: sprintId },
    },
    {
      $group: {
        _id: '$sprint',
        totalStoryPoints: {
          $sum: '$storyPoints',
        },
      },
    },
  ]);
  try {
    await this.model('Sprint').findByIdAndUpdate(sprintId, {
      totalStoryPoints: obj[0].totalStoryPoints,
    });
  } catch (error) {
    console.error(error);
  }
};

TicketSchema.post('save', function () {
  this.constructor.getTotalStoryPoints(this.sprint);
});
TicketSchema.pre('remove', function () {
  this.constructor.getTotalStoryPoints(this.sprint);
});

module.exports = mongoose.model('Ticket', TicketSchema);
