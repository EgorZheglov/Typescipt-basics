import { Request, Response, Router } from 'express';
import { BoardUpdateData } from '../../types';
import boardsService from './board.service';
import taskRoter from '../task/task.router'

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const boards = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(boards);
});

router.post('/', async (req: Request, res: Response) => {
  const { title } = req.body;
  const board = await boardsService.createBoard(title);

  res.json(board);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const board = await boardsService.getBoard(id);

  if (board) {
    res.json(board);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await boardsService.deleteBoard(id);

  res.send(response);
});

router.put('/:id', async (req: Request, res: Response) => {
  const data: BoardUpdateData = {};
  const id = req.params.id;

  const board = await boardsService.updateBoard(data, id);

  if (board) {
    return res.json(board);
  }
});

router.use(taskRoter);

export default router;
