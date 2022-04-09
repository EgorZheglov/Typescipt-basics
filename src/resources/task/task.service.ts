import taskRepo from './task.memory.repository';
import { NewTask, TaskUpdateData } from '../../types';
import Task from './task.model';

const getAll = (boardId: string): Promise<Array<Task>> =>
  taskRepo.getAll(boardId);

const getTask = (boardId: string, taskId: string): Promise<Task | undefined> =>
  taskRepo.getTask(boardId, taskId);

const deleteTask = (boardId: string, taskId: string): Promise<string> => taskRepo.deleteTask(boardId, taskId);

const deleteWithBoard = (boardId: string): Promise<void> => taskRepo.deleteWithBoard(boardId);

const updateTask = (
  data: TaskUpdateData,
  boardId: string,
  taskId: string
): Promise<Task | undefined> => taskRepo.updateTask(data, boardId, taskId);

const createTask = (data: NewTask, boardId: string): Promise<Task> =>
  taskRepo.createTask(data, boardId);

// const removedUserUpdate = (userId: string): Promise<void> => taskRepo.deletedUserUpdate(userId);

export default { getAll, createTask, updateTask, deleteTask, getTask, deleteWithBoard };
