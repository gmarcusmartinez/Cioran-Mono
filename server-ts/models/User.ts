import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { PasswordManager } from '../services/PasswordManager';
const keys = require('../config/keys');

interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  getSignedJwtToken(): string;
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

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this.id, email: this.email }, keys.jwtSecret, {
    expiresIn: keys.jwtExpire,
  });
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
