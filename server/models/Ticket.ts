import mongoose from 'mongoose';

export interface TicketDoc extends mongoose.Document {
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  sprint: string;
  project: string;
  assignedTo: string;
  createdBy: string;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
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
  sprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint',
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
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

export { ticketSchema };
