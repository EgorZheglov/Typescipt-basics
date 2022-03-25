import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity('board')
export default class Board extends BaseEntity{

  @PrimaryColumn()
  board_id: string;

  @Column()
  title: string;

  @Column({
    default: 'there gonna be columns', //there is missing prop in task
  })
  columns: string;
}
