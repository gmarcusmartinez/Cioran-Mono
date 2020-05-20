import { body } from 'express-validator';

export const createProjectValidation = [
  body('title')
    .isLength({ min: 2, max: 20 })
    .withMessage('Project title must be between 2 and 20 characters.'),
  body('slug')
    .isLength({ min: 4, max: 6 })
    .withMessage('Slug must be between 4 and 6 characters.'),
];
