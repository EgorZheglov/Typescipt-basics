import usersRepo from './user.memory.repository';
import { NewUser, UserUpdateData } from '../../types';
import User from './user.model';

const getAll = (): Promise<Array<User>> => usersRepo.getAll();

const getUser = (id: string): Promise<User | undefined> =>
  usersRepo.getUser(id);

const deleteUser = (id: string): Promise<string> => usersRepo.deleteUser(id);

const updateUser = (
  data: UserUpdateData,
  id: string
): Promise<User | undefined> => usersRepo.updateUser(data, id);

const createUser = (data: NewUser): Promise<User> => usersRepo.createUser(data);

export default { getAll, createUser, getUser, deleteUser, updateUser };
