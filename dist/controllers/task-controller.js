"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWithBoard = exports.getTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getAll = void 0;
const task_model_1 = __importDefault(require("../db/models/task-model"));
function getAll(boardId) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: mock implementation. should be replaced during task development
        const tasks = yield task_model_1.default.find({ relations: ['users'] });
        return tasks;
    });
}
exports.getAll = getAll;
function getTask(boardId, taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        return task_model_1.default.findOne({ task_id: taskId, board_id: boardId });
    });
}
exports.getTask = getTask;
function createTask(taskData, boardId) {
    return __awaiter(this, void 0, void 0, function* () {
        const task = task_model_1.default.create(Object.assign(Object.assign({}, taskData), { board_id: boardId }));
        yield task_model_1.default.save(task);
        return task;
    });
}
exports.createTask = createTask;
function deleteTask(boardId, taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        task_model_1.default.delete({ task_id: taskId, board_id: boardId });
        return Promise.resolve('task deleted');
    });
}
exports.deleteTask = deleteTask;
function updateTask(taskInfo, boardId, taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield task_model_1.default.update({ task_id: taskId, board_id: boardId }, taskInfo);
        return yield task_model_1.default.findOne({ task_id: taskId, board_id: boardId });
    });
}
exports.updateTask = updateTask;
function deleteWithBoard(boardId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield task_model_1.default.delete({ board_id: boardId });
        return;
    });
}
exports.deleteWithBoard = deleteWithBoard;
//# sourceMappingURL=task-controller.js.map