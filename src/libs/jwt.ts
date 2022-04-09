import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../common/config';

export const create = (data: string): string => {
  const accessToken: string = jwt.sign(data, `${config.JWT_ACCESS_SECRET}`);

  return accessToken;
};

export const check = async (token: string): Promise<boolean> => {
  try {
    await jwt.verify(token, `${config.JWT_ACCESS_SECRET}`);
  } catch (e) {
    return false;
  }
  
  return true;
};
