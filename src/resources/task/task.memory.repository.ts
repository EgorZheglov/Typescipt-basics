import Task from './task.model';
import { NewTask, TaskUpdateData } from '../../types';
import { randomUUID } from 'crypto';

class Tasks {
  private data: Array<Task> = [];

  constructor() {}

  async getAll(boardId: string): Promise<Array<Task>> {
    // TODO: mock implementation. should be replaced during task development
    const [tasks, number] = await Task.findAndCount();
    return tasks;
  }

  async getTask(boardId: string, taskId: string): Promise<Task | undefined> {
    return Task.findOne({ id: taskId, boardId: boardId })
  }

  async createTask(taskData: NewTask, boardId: string): Promise<Task> {
    const task = Task.create({...taskData, id: randomUUID().substring(26), boardId: boardId});
    await Task.save(task);
    return task;
  }

  async deleteTask(boardId: string, taskId: string): Promise<string> {
    Task.delete({ id: taskId, boardId: boardId })
    return Promise.resolve('task deleted');
  }

  async updateTask(
    taskInfo: TaskUpdateData,
    boardId: string,
    taskId: string
  ): Promise<Task | undefined> {
    await Task.update({ id: taskId, boardId: boardId }, taskInfo);
    return await Task.findOne({ id: taskId, boardId: boardId });
  }

  async deleteWithBoard(boardId: string): Promise<void> {
    await Task.delete({ boardId: boardId })
    return;
  }

  async deletedUserUpdate(userId: string): Promise<void> {
    const [tasks, number] = await Task.findAndCount({ userId: userId });
    tasks.forEach(async (task) => {
      await Task.update({ id: task.id }, { userId: 'null' });
    });
    return;
  }
}

export default new Tasks();
