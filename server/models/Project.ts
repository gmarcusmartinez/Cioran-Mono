import mongoose from 'mongoose';

interface ProjectAttrs {
  title: string;
  slug: string;
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
  team: string[];
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

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
