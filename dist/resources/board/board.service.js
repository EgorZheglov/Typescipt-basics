"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_memory_repository_1 = __importDefault(require("./board.memory.repository"));
const getAll = () => board_memory_repository_1.default.getAll();
const getBoard = (id) => board_memory_repository_1.default.getBoard(id);
const deleteBoard = (id) => board_memory_repository_1.default.deleteBoard(id);
const updateBoard = (data, id) => board_memory_repository_1.default.updateBoard(data, id);
const createBoard = (data) => board_memory_repository_1.default.createBoard(data);
exports.default = { getAll, createBoard, getBoard, deleteBoard, updateBoard };
//# sourceMappingURL=board.service.js.map