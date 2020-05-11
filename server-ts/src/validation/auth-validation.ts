import { body } from 'express-validator';

export const signupValidation = [
  body('name')
    .isLength({ min: 2, max: 20 })
    .withMessage('Name must be between 2 and 20 characters.'),
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 carachters.'),
];

export const siginValidation = [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').trim().notEmpty().withMessage('Password Required.'),
];
