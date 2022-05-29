import { NextFunction, Request, Response, Router } from 'express';
import to from 'await-to-js';
import { loginUser } from '../services/auth-service';
import { userLoginMW } from '../middlwares/user-middlewares';
const login = Router();

login.post(
  '/login',
  userLoginMW,
  async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const [err, result] = await to(loginUser(login, password));
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(201).send({ access_token: result });
  }
);

export default login;
