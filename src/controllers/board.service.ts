import boardRepo from './board.memory.repository';
import { BoardUpdateData } from '../../types';
import Board from './board.model';

const getAll = (): Promise<Array<Board>> => boardRepo.getAll();

const getBoard = (id: string): Promise<Board | undefined> =>
  boardRepo.getBoard(id);

const deleteBoard = (id: string): Promise<string> => boardRepo.deleteBoard(id);

const updateBoard = (
  data: BoardUpdateData,
  id: string
): Promise<Board | undefined> => boardRepo.updateBoard(data, id);

const createBoard = (data: string): Promise<Board> => boardRepo.createBoard(data);

export default { getAll, createBoard, getBoard, deleteBoard, updateBoard };
