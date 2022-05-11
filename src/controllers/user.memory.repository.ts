import User from './user.model';
import { NewUser, UserUpdateData } from '../../types';
import { randomUUID } from 'crypto';

class Users {
  async getAll(): Promise<Array<User>> {
    const [users, number] = await User.findAndCount();
    return users;
  }

  async getUserById(ID: string): Promise<User | undefined> {
    return await User.findOne(ID);
  }

  async getUserByLogin(login: string): Promise<User | undefined> {
    return await User.findOne({ login: login });
  }

  async createUser(userInfo: NewUser): Promise<User> {
    const user = await User.create({ ...userInfo });
    await User.save(user);

    return user;
  }

  async deleteUser(ID: string): Promise<string> {
    await User.delete(ID);
    return 'user deleted';
  }

  async updateUser(
    userInfo: UserUpdateData,
    ID: string
  ): Promise<User | undefined> {
    await User.update({ id: ID }, userInfo);
    return await User.findOne(ID);
  }
}

export default new Users();
