import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';


@Entity('task')
export default class Task extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({
    default: 'coming soon'
  })
  columnId: string;

  @Column({
    default: 'null',
  })
  userId: string;

  @Column()
  boardId: string;

  @Column()
  order: string;

  @Column()
  description: string;
}
