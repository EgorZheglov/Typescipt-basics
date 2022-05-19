"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
exports.default = {
    PORT: process.env.PORT,
    POSTGRES_CONTAINERPORT: process.env.POSTGRES_CONTAINERPORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.ENV === 'DOCKER' ? 'db' : process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
};
//# sourceMappingURL=config.js.map