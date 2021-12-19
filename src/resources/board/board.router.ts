import { Request, Response, Router } from 'express';
import { BoardUpdateData } from '../../types';
import Board from './board.model';
import boardsService from './board.service';

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

  if (req.body.title) {
    data.title = req.body.title;
  }

  if (req.body.columns) {
    data.columns = req.body.columns;
  }

  const board = await boardsService.updateBoard(data, id);

  if (board) {
    return res.json(board);
  }
});

export default router;
