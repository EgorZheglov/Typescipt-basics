import User from '../db/models/user-model';
import { NewUser, UserUpdateData } from '../types';
import * as bcrypt from 'bcrypt';
import config from '../common/config';

async function getAll(): Promise<Array<User>> {
  const users = await User.find({ relations: ['tasks'] });
  return users;
}

async function getUserById(ID: string): Promise<User | undefined> {
  return await User.findOne(ID);
}

async function findByLogin(login: string): Promise<User | undefined> {
  return await User.findOne({ login: login });
}

async function createUser(userInfo: NewUser): Promise<User> {
  const user = await User.create({ ...userInfo });
  await User.save(user);

  return user;
}

async function deleteUser(ID: string): Promise<string> {
  await User.delete(ID);
  return 'user deleted';
}

async function updateUser(
  userInfo: UserUpdateData,
  ID: string
): Promise<User | undefined> {
  if (userInfo.password) {
    userInfo.password = await bcrypt.hash(
      userInfo.password,
      config.SALT_OR_ROUNDS
    );
  }
  await User.update({ id: ID }, userInfo);
  return await User.findOne(ID);
}

export { getAll, createUser, getUserById, deleteUser, updateUser, findByLogin };
