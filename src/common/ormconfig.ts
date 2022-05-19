import { ConnectionOptions, Migration } from 'typeorm';
import config from './config';
import User from '../db/models/user-model';
import Board from '../db/models/board-model';
import Task from '../db/models/task-model';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: config.POSTGRES_HOST,
  port: Number(config.POSTGRES_CONTAINERPORT),
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  logging: false,
  synchronize: true,
  entities: [
    'src/db/models/user-model/**/*{.js,.ts}',
    'src/db/models/board-model/**/*{.js,.ts}',
    'src/db/models/task-model/**/*{.js,.ts}',
  ],
  migrations: ['../../dist/db/migrations/**/*.js'],
  cli: {
    entitiesDir: '../../dist/db/models',
    migrationsDir: '../../dist/db/migrations',
  },
};

export default ormConfig;
