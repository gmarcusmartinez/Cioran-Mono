import mongoose from 'mongoose';
import { UserSubDoc } from './User';
import { SprintSubDoc } from './Sprint';
import { ProjectSubDoc } from './Project';

export interface TicketDoc extends mongoose.Document {
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  sprint: SprintSubDoc;
  project: ProjectSubDoc;
  assignedTo: UserSubDoc | null;
  createdBy: string;
  dateAssigned: Date | null;
  dateSubmitted: Date | null;
  dateCompleted: Date | null;
  createdAt: Date;
  assign(user: UserSubDoc): void;
  unassign(): void;
  submit(): void;
  markComplete(): void;
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
  dateSubmitted: {
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

ticketSchema.methods.assign = function (user: UserSubDoc) {
  this.assignedTo = user;
  this.dateAssigned = new Date(Date.now());
  this.status = 'assigned';
};

ticketSchema.methods.unassign = function () {
  this.assignedTo = null;
  this.dateAssigned = null;
  this.status = 'unassigned';
};

ticketSchema.methods.submit = function () {
  this.dateSubmitted = new Date(Date.now());
  this.status = 'submitted';
};

ticketSchema.methods.markComplete = function () {
  this.dateCompleted = new Date(Date.now());
  this.status = 'completed';
};

export { ticketSchema };
