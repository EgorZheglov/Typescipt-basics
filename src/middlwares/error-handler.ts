import { NextFunction, Request, Response } from 'express';

export default (
  err: Error | string | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('get Error', err);
};
