import User from '../db/models/user-model';
import { NewUser, UserUpdateData } from '../types';

async function getAll(): Promise<Array<User>> {
  const [users, number] = await User.findAndCount();
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
  await User.update({ id: ID }, userInfo);
  return await User.findOne(ID);
}

export { getAll, createUser, getUserById, deleteUser, updateUser, findByLogin };
