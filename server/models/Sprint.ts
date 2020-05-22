import mongoose from 'mongoose';
import { ticketSchema, TicketDoc } from './Ticket';

export interface SprintDoc extends mongoose.Document {
  project: string;
  title: string;
  objective: string;
  totalStoryPoints: number;
  tickets: TicketDoc[];
  startDate: Date;
  endDate: Date;
}
const sprintSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40,
  },
  objective: {
    type: String,
    trim: true,
    maxlength: 140,
  },
  totalStoryPoints: {
    type: Number,
    default: 0,
  },
  tickets: [ticketSchema],
  startDate: {
    type: Date || null,
  },
  endDate: {
    type: Date || null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export { sprintSchema };
