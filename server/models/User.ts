import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { TicketDoc, ticketSchema } from './Ticket';
import { PasswordManager } from '../services/PasswordManager';

import keys from '../config/keys';

interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

export interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  photo: string;
  assignedTickets: TicketDoc[];
  submittedTickets: TicketDoc[];
  getSignedJwtToken(): string;
  createSubDoc(): UserSubDoc;
  removeFromQ(queue: string, ticket: TicketDoc): void;
}
export interface UserSubDoc {
  _id: string;
  name: string;
  photo: string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: '',
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    assignedTickets: [ticketSchema],
    submittedTickets: [ticketSchema],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.methods.createSubDoc = function () {
  const { _id, name, photo } = this;
  return { _id, name, photo };
};

userSchema.methods.getSignedJwtToken = function () {
  const { _id, email } = this;
  return jwt.sign({ _id, email }, keys.jwtSecret, {
    expiresIn: keys.jwtExpire,
  });
};

userSchema.methods.removeFromQ = function (queue: string, ticket: TicketDoc) {
  const index = this[queue].findIndex(
    (t: TicketDoc) => t._id.toString() === ticket._id.toString()
  );
  if (index !== 1) this.assignedTickets.splice(index, 1);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
