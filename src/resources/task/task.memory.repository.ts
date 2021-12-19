import Task from './task.model';
import { NewTask, TaskUpdateData } from '../../types';
import Board from './task.model';

class Tasks {
  private data: Array<Task> = [];

  constructor() {}

  async getAll(boardId: string): Promise<Array<Task>> {
    // TODO: mock implementation. should be replaced during task development
    return this.data.filter((task) => task.boardId === boardId);
  }

  async getTask(boardId: string, taskId: string): Promise<Board | undefined> {
    return this.data.find(
      (task) => task.boardId === boardId && task.id === taskId
    );
  }

  async createTask(taskData: NewTask, boardId: string): Promise<Task> {
    const newTask = new Task(taskData, boardId);
    this.data.push(newTask);
    return Promise.resolve(newTask);
  }

  async deleteTask(boardId: string, taskId: string): Promise<string> {
    this.data = this.data.filter(
      (task) => task.boardId === boardId && task.id !== taskId
    );
    return Promise.resolve('task deleted');
  }

  async updateTask(
    taskInfo: TaskUpdateData,
    boardId: string,
    taskId: string
  ): Promise<Task | undefined> {
    const taskIndex = this.data.findIndex(
      (task) => task.boardId === boardId && task.id === taskId
    );

    if (taskInfo.title) {
      this.data[taskIndex].title = taskInfo.title;
    }

    if (taskInfo.order) {
      this.data[taskIndex].order = taskInfo.order;
    }

    if (taskInfo.columnId) {
      this.data[taskIndex].columnId = taskInfo.columnId;
    }

    if (taskInfo.boardId) {
      this.data[taskIndex].boardId = taskInfo.boardId;
    }

    if (taskInfo.description) {
      this.data[taskIndex].description = taskInfo.description;
    }

    if (taskInfo.userId) {
      this.data[taskIndex].userId = taskInfo.userId;
    }

    return this.data[taskIndex];
  }

  async deleteWithBoard(boardId: string): Promise<void> {
    this.data = this.data.filter((task) => task.boardId !== boardId);
    return;
  }

  async deletedUserUpdate(userId: string): Promise<void> {
    this.data = this.data.map((element):Task => {
      if (element.userId === userId) {
        element.updateUser(null);
      } 
      return element;
    });
  }
}

export default new Tasks();
