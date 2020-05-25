import mongoose from 'mongoose';
import { SprintDoc, sprintSchema } from './Sprint';
interface ProjectAttrs {
  title: string;
  slug: string;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

export interface ProjectDoc extends mongoose.Document {
  title: string;
  photo: string;
  slug: string;
  projectOwner: string;
  sprints: SprintDoc[];
  team: string[];
  createSubDoc(): ProjectSubDoc;
}
export interface ProjectSubDoc {
  _id: string;
  slug: string;
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
  sprints: [sprintSchema],
  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
});

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

projectSchema.methods.createSubDoc = function () {
  const { _id, slug } = this;
  return { _id, slug };
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
