import mongoose from 'mongoose';
import { sprintSchema, SprintAttrs } from './Sprint';

interface ProjectAttrs {
  title: string;
  slug: string;
  projectOwner: string;
}

interface SprintSubDoc {
  _id: string;
  title: string;
  startDate: Date;
  endDate: Date;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

interface ProjectDoc extends mongoose.Document {
  title: string;
  photo: string;
  slug: string;
  projectOwner: string;
  sprints: SprintSubDoc[];
}

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    default: 'no-image.jpg',
  },
  slug: {
    type: String,
    required: true,
  },
  projectOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sprints: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      title: String,
      startDate: Date,
      endDate: Date,
    },
  ],
});

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
