import to from 'await-to-js';
import errmessages from '../common/errmessages';
import Task from '../db/models/task-model';
import { NewTask, TaskUpdateData } from '../types';

async function getAll(boardId: string): Promise<Array<Task>> {
  const tasks = await Task.find({ where: { board: boardId } });
  return tasks;
}

async function getTask(
  boardId: string,
  taskId: string
): Promise<Task | undefined> {
  return Task.findOne({ task_id: taskId, board: boardId });
}

async function createTask(taskData: NewTask): Promise<Task> {
  const task = await Task.create(taskData);
  const [err, result] = await to(Task.save(task));

  if (err) {
    throw errmessages.ERROR_DURING_EXECUTING;
  }

  return result;
}

async function deleteTask(boardId: string, taskId: string): Promise<string> {
  await Task.delete({ task_id: taskId, board: boardId });
  return 'task deleted';
}

async function updateTask(
  taskInfo: TaskUpdateData,
  boardId: string,
  taskId: string
): Promise<Task | undefined> {
  const task = await Task.update({ task_id: taskId, board: boardId }, taskInfo);
  console.log(task);
  return await Task.findOne({ task_id: taskId, board: boardId });
}

export { getAll, createTask, updateTask, deleteTask, getTask };
