import { Request, Response } from 'express';

import { User } from '../models/User';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordManager } from '../services/PasswordManager';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await User.findById(req.currentUser._id);
    if (!user) throw new NotAuthorizedError();
    res.send(user);
  }
);

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError('Email in use.');

  const user = User.build({ name, email, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send(user);
});

export const signin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new BadRequestError('Invalid credentials');

  const passwordsMatch = await PasswordManager.compare(user.password, password);
  if (!passwordsMatch) throw new BadRequestError('Invalid Credentials');

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send(user);
});

export const signout = asyncHandler(async (req: Request, res: Response) => {
  req.session = null;
  res.send({ msg: 'User signed out' });
});
