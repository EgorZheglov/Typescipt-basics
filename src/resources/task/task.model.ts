import { randomUUID } from 'crypto';
import { Column, NewTask } from '../../types';

export default class Task {
  columnId: string;
  boardId: string;
  userId: string | null;
  title: string;
  id: string;
  order: string;
  description: string;

  constructor(data: NewTask, boardId: string) {
    this.id = randomUUID().substring(26);
    this.title = data.title;
    this.columnId = data.columnId;
    this.userId = data.userId ? data.userId : null;
    this.boardId = boardId;
    this.order = data.order;
    this.description = data.description;
  }

  updateUser (value: string | null) {
    this.userId = value;
  }
}
