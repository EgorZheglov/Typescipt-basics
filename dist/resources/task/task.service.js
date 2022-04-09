"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_memory_repository_1 = __importDefault(require("./task.memory.repository"));
const getAll = (boardId) => task_memory_repository_1.default.getAll(boardId);
const getTask = (boardId, taskId) => task_memory_repository_1.default.getTask(boardId, taskId);
const deleteTask = (boardId, taskId) => task_memory_repository_1.default.deleteTask(boardId, taskId);
const deleteWithBoard = (boardId) => task_memory_repository_1.default.deleteWithBoard(boardId);
const updateTask = (data, boardId, taskId) => task_memory_repository_1.default.updateTask(data, boardId, taskId);
const createTask = (data, boardId) => task_memory_repository_1.default.createTask(data, boardId);
const removedUserUpdate = (userId) => task_memory_repository_1.default.deletedUserUpdate(userId);
exports.default = { getAll, createTask, updateTask, deleteTask, getTask, removedUserUpdate, deleteWithBoard };
//# sourceMappingURL=task.service.js.map