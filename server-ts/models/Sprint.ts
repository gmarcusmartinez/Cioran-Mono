import mongoose from 'mongoose';

export interface SprintAttrs {
  project: string;
  title: string;
  objective: string;
  totalStoryPoints: number;
  startDate: Date;
  endDate: Date;
}
interface SprintModel extends mongoose.Model<SprintDoc> {
  build(attrs: SprintAttrs): SprintDoc;
}

interface SprintDoc extends mongoose.Document {
  project: string;
  title: string;
  objective: string;
  totalStoryPoints: number;
  startDate: Date;
  endDate: Date;
}
export const sprintSchema = new mongoose.Schema({
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
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
sprintSchema.statics.build = (attrs: SprintAttrs) => {
  return new Sprint(attrs);
};
const Sprint = mongoose.model<SprintDoc, SprintModel>('Sprint', sprintSchema);

export { Sprint };
