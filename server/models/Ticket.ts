import mongoose from 'mongoose';

export interface TicketDoc extends mongoose.Document {
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  sprint: SprintSubDoc;
  project: ProjectSubDoc;
  assignedTo: UserSubDoc;
  createdBy: string;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
}
export interface UserSubDoc {
  _id: string;
  name: string;
  photo: string;
}
export interface SprintSubDoc {
  _id: string;
  endDate: Date;
}
export interface ProjectSubDoc {
  _id: string;
  slug: string;
}

const ticketSchema = new mongoose.Schema({
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
    enum: ['unassigned', 'assigned', 'submitted', 'completed'],
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
  sprint: {
    type: {
      _id: String,
      endDate: Date,
    },
  },
  project: {
    type: {
      _id: String,
      slug: String,
    },
  },
  assignedTo: {
    type:
      {
        _id: String,
        name: String,
        photo: String,
      } || null,
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

export { ticketSchema };
