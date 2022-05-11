import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import Task from '../task/task.model';

@Entity('board')
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  board_id: string;

  @Column()
  title: string;

  @OneToMany(() => Task, (task) => task.boardId)
  tasks: Task;
}
