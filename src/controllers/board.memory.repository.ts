import { BoardUpdateData } from '../../types';
import Board from './board.model';
import { randomUUID } from 'crypto';

class Boards {

  async getAll(): Promise<Array<Board>> {
    const [boards, number] = await Board.findAndCount();
    return boards;
  }

  async getBoard(ID: string): Promise<any> {
    //TODO: understand why at the end of id... i killed 3 days
    return await Board.find({ board_id:ID.slice(0, 10) })
  }

  async createBoard(boardTitle: string): Promise<Board> {
    const board = await Board.create({ title: boardTitle })
    await Board.save(board);

    return board;
  }

  async deleteBoard(ID: string): Promise<string> {
    await Board.delete(ID);
    return 'board deleted';
  }

  async updateBoard(
    boardInfo: BoardUpdateData,
    ID: string
  ): Promise<Board | undefined> {

    await Board.update({board_id: ID}, boardInfo);
    return await Board.findOne(ID);
  }
}

export default new Boards();
