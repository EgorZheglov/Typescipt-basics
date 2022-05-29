import { NextFunction, Request, Response, Router } from 'express';
import to from 'await-to-js';
import { userCreateMW } from '../middlwares/user-middlewares';
import { NewUser } from '../types';
import { signupUser } from '../services/auth-service';

const signup = Router();

signup.post(
  '/signup',
  userCreateMW,
  async (req: Request, res: Response, next: NextFunction) => {
    const payload: NewUser = req.body;

    const [err, user] = await to(signupUser(payload));

    if (err) {
      //TODO: next(err) coz can be different errors and statuses durning signup
      return res.status(500).send(err);
    }

    return res.status(201).send(user!);
  }
);

export default signup;
