import { BoardUpdateData } from '../types';
import Board from '../db/models/board-model';

async function getAll(): Promise<Array<Board>> {
  const boards = await Board.find({ relations: ['tasks'] });
  return boards;
}

async function getBoard(ID: string): Promise<any> {
  return await Board.find({ board_id: ID });
}

async function createBoard(boardTitle: string): Promise<Board> {
  const board = await Board.create({ title: boardTitle });
  await Board.save(board);

  return board;
}

async function deleteBoard(ID: string): Promise<string> {
  await Board.delete(ID);
  return 'board deleted';
}

async function updateBoard(
  boardInfo: BoardUpdateData,
  ID: string
): Promise<Board | undefined> {
  await Board.update({ board_id: ID }, boardInfo);
  return await Board.findOne(ID);
}

export { getAll, createBoard, getBoard, deleteBoard, updateBoard };
