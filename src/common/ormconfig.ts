import { ConnectionOptions, Migration } from "typeorm";
import config from "./config";
import User from "../resources/users/user.model";
import Board from "../resources/board/board.model";
import Task from "../resources/task/task.model";

const ormConfig: ConnectionOptions = {
    type: 'postgres',
    host: config.POSTGRES_HOST,
    port: Number(config.POSTGRES_CONTAINERPORT),
    username: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    logging: false,
    synchronize: false,
    migrations: ['src/migrations/**/*.ts'],
    migrationsRun: false,
    entities: [
        User,
        Board,
        Task,
    ]
}

export default ormConfig 