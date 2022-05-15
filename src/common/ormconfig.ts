import { ConnectionOptions, Migration } from "typeorm";
import config from "./config";
import User from "../db/models/user-model";
import Board from "../db/models/board-model";
import Task from "../db/models/task-model";

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
        User,
        Board,
        Task,
    ],
    migrations: ["../migrations/*.ts"],
}

export default ormConfig 