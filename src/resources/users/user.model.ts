import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export default class User extends BaseEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;
}
