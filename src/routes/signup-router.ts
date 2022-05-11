import { NextFunction, Request, Response, Router } from 'express';
import to from 'await-to-js';
import { userCreateMW } from '../../middlwares/user-middleware';
import encrypt from '../../libs/encrypt';
import { NewUser } from '../../types';
import userService from '../users/user.service';
import restrictResponse from '../../libs/restrict-response';

const signup = Router();

signup.post(
  '/signup',
  userCreateMW,
  async (req: Request, res: Response, next: NextFunction) => {
    const payload: NewUser = {
      login: req.body.login,
      name: req.body.name,
      password: encrypt(req.body.password),
    };

    const [err, user] = await to(userService.createUser(payload));

    if (err) {
      //TODO: validate error
    }

    return res.status(201).send(restrictResponse(user!));
  }
);

export default signup;
