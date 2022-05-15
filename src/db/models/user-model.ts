import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import Task from './task-model';

@Entity('user')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Task, (task) => task.user, { onDelete: 'SET NULL' })
  tasks: Task[];

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;
}
