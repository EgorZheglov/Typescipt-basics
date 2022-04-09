"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_memory_repository_1 = __importDefault(require("./user.memory.repository"));
const getAll = () => user_memory_repository_1.default.getAll();
const getUser = (id) => user_memory_repository_1.default.getUser(id);
const deleteUser = (id) => user_memory_repository_1.default.deleteUser(id);
const updateUser = (data, id) => user_memory_repository_1.default.updateUser(data, id);
const createUser = (data) => user_memory_repository_1.default.createUser(data);
exports.default = { getAll, createUser, getUser, deleteUser, updateUser };
//# sourceMappingURL=user.service.js.map