import to from 'await-to-js';
import errmessages from '../common/errmessages';
import { createUser, findByLogin } from '../controllers/user-controller';
import * as jwt from '../libs/jwt';
import { NewUser } from '../types';
import User from '../db/models/user-model';
import * as bcrypt from 'bcrypt';

interface PostgresError {
  driverError: {
    code: string;
  };
}

export async function loginUser(
  login: string,
  password: string
): Promise<string> {
  const [err, user] = await to(findByLogin(login));

  if (err || !user) {
    throw errmessages.ERROR_LOGIN;
  }

  const compared = await bcrypt.compare(password, user.password);

  if (!compared) {
    throw errmessages.ERROR_LOGIN;
  }

  return jwt.create(user!.id);
}

export async function signupUser(payload: NewUser): Promise<User> {
  const [err, user] = await to(createUser(payload));

  if (err && (err as object as PostgresError).driverError.code === '23505') {
    throw errmessages.USER_ALREADY_EXISTS;
  } else if (err) throw err;

  return user!;
}
