"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const user_model_1 = __importDefault(require("../resources/users/user.model"));
const board_model_1 = __importDefault(require("../resources/board/board.model"));
const task_model_1 = __importDefault(require("../resources/task/task.model"));
const ormConfig = {
    type: 'postgres',
    host: config_1.default.POSTGRES_HOST,
    port: Number(config_1.default.POSTGRES_CONTAINERPORT),
    username: config_1.default.POSTGRES_USER,
    password: config_1.default.POSTGRES_PASSWORD,
    database: config_1.default.POSTGRES_DB,
    logging: false,
    synchronize: true,
    entities: [
        user_model_1.default,
        board_model_1.default,
        task_model_1.default,
    ]
};
exports.default = ormConfig;
//# sourceMappingURL=ormconfig.js.map