import { Request } from 'express';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import User from '../models/User';
import IUser from '../types/models/IUser';
import { HydratedDocument } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../utils/ApiError';
import Bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

const AuthController = {
  signIn: asyncWrapper(async (req: Request) => {
    const { email, password } = req.body;

    const _user = await User.findOne({ email: email });

    if (!_user) throw new ApiError(StatusCodes.NOT_FOUND, 'No User Found!');

    if (_user.isAdmin) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'Admin Cannot Login As User!');

    const bcryptedPasswordCheck = Bcrypt.compareSync(password, _user.password);

    if (bcryptedPasswordCheck) {
      const token = JWT.sign(
        {
          id: _user._id,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
      );

      const returnObject = {
        token: token,
        email: email,
        name: _user.name,
      };

      return new SuccessResponse(returnObject);
    } else throw new ApiError(StatusCodes.NOT_FOUND, 'Credentials are not Valid!');
  }),
  signUp: asyncWrapper(async (req: Request) => {
    const { email, password, name } = req.body;

    const _user = await User.findOne({ email: email });

    if (_user) throw new ApiError(StatusCodes.BAD_REQUEST, 'User Email Already Exists! Use Another Email');

    const bcryptedPassword = Bcrypt.hashSync(password, 10);

    const user: HydratedDocument<IUser> = new User({
      name: name,
      email: email,
      password: bcryptedPassword,
    });

    await user.save();
    return new SuccessResponse('User has been Registerd!, Now Signin');
  }),
  adminSignIn: asyncWrapper(async (req: Request) => {
    const { email, password } = req.body;

    const _user = await User.findOne({ email: email });

    if (!_user) throw new ApiError(StatusCodes.NOT_FOUND, 'No Admin Found!');

    if (!_user.isAdmin) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'User Cannot Login As Admin!');

    const bcryptedPasswordCheck = Bcrypt.compareSync(password, _user.password);

    if (bcryptedPasswordCheck) {
      const token = JWT.sign(
        {
          id: _user._id,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
      );

      const returnObject = {
        token: token,
        email: email,
        name: _user.name,
      };

      return new SuccessResponse(returnObject);
    } else throw new ApiError(StatusCodes.NOT_FOUND, 'Credentials are not Valid!');
  }),
  adminSignUp: asyncWrapper(async (req: Request) => {
    const { email, password, name, admin_key } = req.body;

    const _user = await User.findOne({ email: email });
    // console.log(_user);

    if (_user) {
      if (_user.isAdmin) throw new ApiError(StatusCodes.BAD_REQUEST, 'Admin Already Exists!');
      if (!_user.isAdmin) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'User cannot signup as Admin!');
    }

    if (admin_key === process.env.ADMIN_KEY) {
      const bcryptedPassword = Bcrypt.hashSync(password, 10);

      const user: HydratedDocument<IUser> = new User({
        name: name,
        email: email,
        password: bcryptedPassword,
        isAdmin: true,
      });

      await user.save();
      return new SuccessResponse('Admin has been Registerd!, Now Signin');
    } else throw new ApiError(StatusCodes.NOT_FOUND, 'Enter Valid Admin Key!');
  }),
};

export default AuthController;
