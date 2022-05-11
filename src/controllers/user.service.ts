import usersRepo from './user.memory.repository';
import { NewUser, UserUpdateData } from '../../types';
import User from './user.model';
import { to } from 'await-to-js';
import * as jwt from '../../libs/jwt';

const getAll = (): Promise<Array<User>> => usersRepo.getAll();

const getUserById = (id: string): Promise<User | undefined> =>
  usersRepo.getUserById(id);

const deleteUser = (id: string): Promise<string> => usersRepo.deleteUser(id);

const updateUser = (
  data: UserUpdateData,
  id: string
): Promise<User | undefined> => usersRepo.updateUser(data, id);

const loginUser = async (login: string, password: string): Promise<string> => {
  const [err, data] = await to(usersRepo.getUserByLogin(login));

  if (err || !data) {
    throw 'User not found';
  }

  if (data.password !== password) {
    throw 'Auth error';
  }

  return jwt.create(data.id);
};

const createUser = (data: NewUser): Promise<User> => usersRepo.createUser(data);

export default {
  getAll,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
};
