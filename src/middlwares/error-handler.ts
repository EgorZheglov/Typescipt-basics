import { NextFunction, Request, Response } from 'express';

export default (
  err: Error | string | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Error:', err);
  //soon will get all exceptions and check for Errors/statuses/messages then send it to user
};
