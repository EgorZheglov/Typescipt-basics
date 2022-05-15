import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
//  JoinColumn,
} from 'typeorm';
import Task from './task-model';

@Entity('board')
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  board_id: string;

  @Column()
  title: string;

  @OneToMany(() => Task, (task) => task.boardId, { onDelete: 'CASCADE' })
  tasks: Task[];
}