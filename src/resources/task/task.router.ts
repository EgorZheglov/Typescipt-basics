import { Request, Response, Router } from 'express';
import taskService from './task.service';

const router: Router = Router();

router.get('/:boardId/tasks', async (req: Request, res: Response) => {
  const boardId = req.params.boardId;
  const tasks = await taskService.getAll(boardId);
  // map user fields to exclude secret fields like "password"
  res.json(tasks);
});

router.post('/:boardId/tasks', async (req: Request, res: Response) => {
  const { title } = req.body;
  const boardId = req.params.boardId;
  const task = await taskService.createTask(title, boardId);

  res.json(task);
});

router.get('/:boardId/tasks/:taskId', async (req: Request, res: Response) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;
  const task = await taskService.getTask(boardId, taskId);

  if (task) {
    res.json(task);
  }
});

router.delete(
  '/:boardId/tasks/:taskId',
  async (req: Request, res: Response) => {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const response = await taskService.deleteTask(boardId, taskId);

    res.send(response);
  }
);

router.put('/:boardId/tasks/:taskId', async (req: Request, res: Response) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;
  const task = await taskService.updateTask(req.body, boardId, taskId);

  if (task) {
    return res.json(task);
  }
});

export default router;
