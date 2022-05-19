"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const ormConfig = {
    type: 'postgres',
    host: config_1.default.POSTGRES_HOST,
    port: Number(config_1.default.POSTGRES_CONTAINERPORT),
    username: config_1.default.POSTGRES_USER,
    password: config_1.default.POSTGRES_PASSWORD,
    database: config_1.default.POSTGRES_DB,
    logging: false,
    synchronize: true,
    entities: ['dist/db/models/**/*.js'],
    migrations: ['dist/db/migrations/**/*.js'],
    cli: {
        entitiesDir: '../../dist/db/models',
        migrationsDir: '../../dist/db/migrations',
    },
};
exports.default = ormConfig;
//# sourceMappingURL=ormconfig.js.map