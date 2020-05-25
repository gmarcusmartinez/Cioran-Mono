import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import keys from '../config/keys';

interface UserPayload {
  name: string;
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, keys.jwtSecret!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }
  next();
};
