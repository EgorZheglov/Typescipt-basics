import User from './user.model';
import { NewUser, UserUpdateData } from '../../types';

class Users {
  private data: Array<User> = [];

  constructor() {}

  async getAll(): Promise<Array<User>> {
    // TODO: mock implementation. should be replaced during task development
    return this.data;
  }

  async getUser(ID: string): Promise<User | undefined> {
    return this.data.find((user) => user.id === ID);
  }

  async createUser(userInfo: NewUser): Promise<User> {
    const newUser = new User(userInfo);
    this.data.push(newUser);
    return Promise.resolve(newUser);
  }

  async deleteUser(ID: string): Promise<string> {
    this.data = this.data.filter((user) => user.id !== ID);
    return Promise.resolve('user deleted');
  }

  async updateUser(
    userInfo: UserUpdateData,
    ID: string
  ): Promise<User | undefined> {
    const userIndex = this.data.findIndex((user) => user.id === ID);

    if (userInfo.name) {
      this.data[userIndex].name = userInfo.name;
    }

    if (userInfo.login) {
      this.data[userIndex].login = userInfo.login;
    }

    if (userInfo.password) {
      this.data[userIndex].password = userInfo.password;
    }

    return this.data[userIndex];
  }
}

export default new Users();
