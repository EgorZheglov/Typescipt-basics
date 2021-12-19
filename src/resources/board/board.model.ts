import { randomUUID } from 'crypto';
import { Column } from '../../types';

export default class Board {
  id: string;
  title: string;
  columns: Array<Column>;

  constructor(title = 'Test') {
    this.id = randomUUID().substring(26);
    this.title = title;
    this.columns = []
  }
}
