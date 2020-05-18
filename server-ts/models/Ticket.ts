import mongoose from 'mongoose';

interface TicketAttrs {
  title: string;
  ticketType: string;
  status: string;
  description: string;
  priority: string;
  storyPoints: number;
}
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}
interface TicketDoc extends mongoose.Document {
  sprint: string;
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  assignedTo: string;
  createdBy: string;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
}

export const ticketSchema = new mongoose.Schema({
  sprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  ticketType: {
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
  storyPoints: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 5, 8, 13],
  },
  priority: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high'],
    default: 'low',
  },
  description: {
    type: String,
    trim: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId || null,
    ref: 'User',
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dateAssigned: {
    type: Date || null,
    default: null,
  },
  dateCompleted: {
    type: Date || null,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ticketSchema.statics.getTotalStoryPoints = async function (sprintId: string) {
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

ticketSchema.post('save', function () {
  this.constructor.getTotalStoryPoints(this.sprint);
});

// ticketSchema.pre('remove', function () {
//     this.constructor.getTotalStoryPoints(this.sprint);
// });

ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};
const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };
