import { Router } from 'express';
import {
  signupValidation,
  siginValidation,
} from '../validation/auth-validation';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import {
  signin,
  signup,
  signout,
  getCurrentUser,
  googleOAuth,
  googleCallback,
} from '../controllers/auth';

const router = Router();

router.route('/google').get(googleOAuth);
router.route('/google/callback').get(googleCallback);

router.route('/currentUser').get(currentUser, getCurrentUser);
router.route('/signin').post(siginValidation, validateRequest, signin);
router.route('/signup').post(signupValidation, validateRequest, signup);
router.route('/signout').post(signout);

export { router as authRouter };
