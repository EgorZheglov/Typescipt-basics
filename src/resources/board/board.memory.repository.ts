import User from './board.model';
import { BoardUpdateData } from '../../types';
import Board from './board.model';

class Boards {
  private data: Array<Board> = [];

  constructor() {}

  async getAll(): Promise<Array<Board>> {
    // TODO: mock implementation. should be replaced during task development
    return this.data;
  }

  async getBoard(ID: string): Promise<Board | undefined> {
    return this.data.find((board) => board.id === ID);
  }

  async createBoard(boardTitle: string): Promise<Board> {
    const newBoard = new Board(boardTitle);
    this.data.push(newBoard);
    return Promise.resolve(newBoard);
  }

  async deleteBoard(ID: string): Promise<string> {
    this.data = this.data.filter((board) => board.id !== ID);
    return Promise.resolve('board deleted');
  }

  async updateBoard(
    boardInfo: BoardUpdateData,
    ID: string
  ): Promise<User | undefined> {
    const boardIndex = this.data.findIndex((board) => board.id === ID);

    if (boardInfo.title) {
      this.data[boardIndex].title = boardInfo.title;
    }

    if (boardInfo.columns) {
      this.data[boardIndex].columns = boardInfo.columns;
    }

    return this.data[boardIndex];
  }
}

export default new Boards();
