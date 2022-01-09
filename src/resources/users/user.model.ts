import { randomUUID } from 'crypto';

export default class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({
    id = randomUUID().substring(26),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): object {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
