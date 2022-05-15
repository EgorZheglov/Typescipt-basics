import { NextFunction, Request, Response } from 'express';
import {
  userLoginValidator,
  userUpdateValidator,
  userCreateValidator,
} from '../validators/user-validator';
import errmessages from '../common/errmessages';

export const userLoginMW = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const result = userLoginValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  } else {
    return next();
  }
};

export const userUpdateMW = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const result = userUpdateValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  } else {
    return next();
  }
};

export const userCreateMW = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const result = userCreateValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  } else {
    return next();
  }
};
