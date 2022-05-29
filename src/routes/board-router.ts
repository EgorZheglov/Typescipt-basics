import { Request, Response, Router } from 'express';
import { boardMw } from '../middlwares/board-middlewares';
import {
  getAll,
  createBoard,
  getBoard,
  deleteBoard,
  updateBoard,
} from '../controllers/board-controller';
import taskRouter from './task-router';
import to from 'await-to-js';
import errmessages from '../common/errmessages';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const [err, boards] = await to(getAll());
  if (err) {
    return res.status(500).send(errmessages.ERROR_DURING_EXECUTING);
  }
  res.json(boards);
});

router.post('/', boardMw, async (req: Request, res: Response) => {
  const { title } = req.body;
  const board = await createBoard(title);

  res.status(201).send(board);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const [err, board] = await to(getBoard(id));

  if (board) {
    res.send(board);
  } else {
    res.status(404).send('Not found');
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await deleteBoard(id);

  res.status(204).send('deleted');
});

router.put('/:id', boardMw, async (req: Request, res: Response) => {
  const id = req.params.id;

  const board = await updateBoard(req.body, id);

  if (board) {
    return res.status(200).send(board);
  } else {
    res.status(404).json('Not found');
  }
});

router.use(taskRouter);

export default router;
