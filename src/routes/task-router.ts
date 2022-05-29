import { Request, Response, Router } from 'express';
import { taskCreateMW, taskUpdateMW } from '../middlwares/task-middlwares';
import {
  getAll,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from '../controllers/task-controller';
import to from 'await-to-js';
import errmessages from '../common/errmessages';

const router: Router = Router();

router.get('/:boardId/tasks', async (req: Request, res: Response) => {
  const boardId = req.params.boardId;
  const [err, tasks] = await to(getAll(boardId));

  if (err) {
    console.log(err);
    return res.status(500).send(errmessages.ERROR_DURING_EXECUTING);
  }
  // map user fields to exclude secret fields like "password"
  res.json(tasks);
});

router.post(
  '/:boardId/tasks',
  taskCreateMW,
  async (req: Request, res: Response) => {
    const board = req.params.boardId;

    const [err, task] = await to(createTask({ ...req.body, board }));

    if (err) return res.status(500).send(err);

    res.status(201).json(task);
  }
);

router.get('/:boardId/tasks/:taskId', async (req: Request, res: Response) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;
  const task = await getTask(boardId, taskId);

  if (task) {
    res.json(task);
  }
});

router.delete(
  '/:boardId/tasks/:taskId',
  async (req: Request, res: Response) => {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const response = await deleteTask(boardId, taskId);

    res.status(200).send(response);
  }
);

router.put(
  '/:boardId/tasks/:taskId',
  taskUpdateMW,
  async (req: Request, res: Response) => {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const [err, task] = await to(updateTask(req.body, boardId, taskId));

    if (err) {
      return res.status(500).send(errmessages.CANNOT_UPDATE_TASK);
    } else {
      return res.status(200).send(task);
    }
  }
);

export default router;
