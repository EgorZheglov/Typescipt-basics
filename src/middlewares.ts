import { NextFunction, Request, Response, Router } from 'express';
import * as jwt from './libs/jwt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next('SHOULD CONTAINS TOKEN');
  }
  const headerParts = authorizationHeader.split(' ');
  if (headerParts[0] !== 'Bearer') {
    return next('INCORRECT TOKEN');
  }
  const accessToken = headerParts[1];
  const tokenIsValid = await jwt.check(accessToken);
  if (!tokenIsValid) {
    return next('TOKEN ERROR');
  }
  return next();
};
