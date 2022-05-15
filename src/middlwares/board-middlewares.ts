import { NextFunction, Request, Response } from 'express';
import { boardCreateValidator } from '../validators/board-validator';
import errmessages from '../common/errmessages';

export const boardMw = (req: Request, res: Response, next: NextFunction) => {
  const payload = { ...req.body };
  const result = boardCreateValidator(payload);

  if (result.error) {
    return next(errmessages.BAD_REQUEST);
  } else {
    return next();
  }
};
