import express from 'express';
import RequestValidator from '../middlewares/RequestValidator';
import AuthController from '../controllers/AuthController';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { SignUpRequest } from '../validations/auth/SignUpRequest';
import { AdminSignUpRequest } from '../validations/auth/AdminSignUpRequest';
import { SignInRequest } from '../validations/auth/SignInRequest';

const router = express.Router();

router.get(
  '/',
  asyncWrapper(async () => new SuccessResponse('Auth Route is working!')),
);

router.post('/signup', RequestValidator.validate(SignUpRequest), AuthController.signUp);
router.post('/signin', RequestValidator.validate(SignInRequest), AuthController.signIn);
router.post('/admin/signup', RequestValidator.validate(AdminSignUpRequest), AuthController.adminSignUp);
router.post('/admin/signin', RequestValidator.validate(SignInRequest), AuthController.adminSignIn);
// router.post("/signin", AuthController.signIn);

export default router;
