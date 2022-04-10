import { NextFunction, Request, Response } from 'express';
import {
  taskCreateValidator,
  taskUpdateValidator,
} from '../validators/task-validator';
import errmessages from '../common/errmessages';

export const taskCreateMW = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const result = taskCreateValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  }
};

export const taskUpdateMW = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const result = taskUpdateValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  }
};
