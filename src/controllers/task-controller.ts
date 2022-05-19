import Task from '../db/models/task-model';
import { NewTask, TaskUpdateData } from '../types';

async function getAll(boardId: string): Promise<Array<Task>> {
  // TODO: mock implementation. should be replaced during task development
  const tasks = await Task.find({ relations: ['users'] });
  return tasks;
}

async function getTask(
  boardId: string,
  taskId: string
): Promise<Task | undefined> {
  return Task.findOne({ task_id: taskId, board_id: boardId });
}

async function createTask(taskData: NewTask, boardId: string): Promise<Task> {
  const task = Task.create({ ...taskData, board_id: boardId });
  await Task.save(task);
  return task;
}

async function deleteTask(boardId: string, taskId: string): Promise<string> {
  Task.delete({ task_id: taskId, board_id: boardId });
  return Promise.resolve('task deleted');
}

async function updateTask(
  taskInfo: TaskUpdateData,
  boardId: string,
  taskId: string
): Promise<Task | undefined> {
  await Task.update({ task_id: taskId, board_id: boardId }, taskInfo);
  return await Task.findOne({ task_id: taskId, board_id: boardId });
}

async function deleteWithBoard(boardId: string): Promise<void> {
  await Task.delete({ board_id: boardId });
  return;
}

export { getAll, createTask, updateTask, deleteTask, getTask, deleteWithBoard };
