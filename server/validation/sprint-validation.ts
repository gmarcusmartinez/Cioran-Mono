import { body } from 'express-validator';

export const createSprintValidation = [
  body('title')
    .isLength({ min: 2, max: 20 })
    .withMessage('Sprint title must be between 2 and 20 characters.'),
  body('startDate').exists().withMessage('Start date required.'),
  body('endDate').exists().withMessage('End date required.'),
];
