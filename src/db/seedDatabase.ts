import { createConnection, Connection } from 'typeorm';
import ormConfig from '../common/ormconfig';
import { createBoard } from '../controllers/board-controller';
import { createUser } from '../controllers/user-controller';
import { createTask } from '../controllers/task-controller';
import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import encrypt from '../libs/encrypt';
import Board from './models/board-model';
import User from './models/user-model';
import Task from './models/task-model';
import { NewTask } from '../types';

const SEED_VALUE = 20;

let db: Connection;
const boards: Array<Board> = [];
const users: Array<User> = [];
const tasks: Array<Task> = [];
console.log(ormConfig);

createConnection(ormConfig)
  .then(async (connection) => {
    db = connection;
    await connection
      .runMigrations()
      .catch((e) => console.log(`err durning seed ${e}`));

    for (let i = 0; i < SEED_VALUE; i++) {
      const board = await createBoard(faker.commerce.product());
      boards.push(board);
      const user = await createUser({
        name: faker.name.firstName(),
        login: randomUUID(),
        password: encrypt('test'),
      });
      users.push(user);
    }

    for (let i = 0; i < SEED_VALUE; i++) {
      for (let j = 0; j < 2; j++) {
        const payload: NewTask = {
          title: faker.commerce.product(),
          description: faker.vehicle.vehicle(),
          user: users[Math.floor(Math.random() * 10)].id,
          board: boards[i].board_id,
        };

        await createTask(payload).catch((e) => {
          console.log('seed failed', e);
        });
      }
    }

    await db.close();

    console.log('db seed completed');
    return;
  })
  .catch(async (e) => {
    await db.close();

    console.log('db seed failed', e);
  });
