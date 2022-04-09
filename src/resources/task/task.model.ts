import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { TaskStatus } from '../../types';
import User from '../users/user.model';
import Board from '../board/board.model';

@Entity('task')
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  task_id: string;

  @Column()
  title: string;

  @Column({ default: TaskStatus.TODO })
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => Board, (board) => board.tasks)
  boardId: string;

  @Column()
  order: string;

  @Column()
  description: string;
}
