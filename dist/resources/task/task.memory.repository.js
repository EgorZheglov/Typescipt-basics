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
const task_model_1 = __importDefault(require("./task.model"));
class Tasks {
    constructor() {
        this.data = [];
    }
    getAll(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: mock implementation. should be replaced during task development
            const [tasks, number] = yield task_model_1.default.findAndCount();
            return tasks;
        });
    }
    getTask(boardId, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_model_1.default.findOne({ task_id: taskId, boardId: boardId });
        });
    }
    createTask(taskData, boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = task_model_1.default.create(Object.assign(Object.assign({}, taskData), { boardId: boardId }));
            yield task_model_1.default.save(task);
            return task;
        });
    }
    deleteTask(boardId, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            task_model_1.default.delete({ task_id: taskId, boardId: boardId });
            return Promise.resolve('task deleted');
        });
    }
    updateTask(taskInfo, boardId, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield task_model_1.default.update({ task_id: taskId, boardId: boardId }, taskInfo);
            return yield task_model_1.default.findOne({ task_id: taskId, boardId: boardId });
        });
    }
    deleteWithBoard(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield task_model_1.default.delete({ boardId: boardId });
            return;
        });
    }
    deletedUserUpdate(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [tasks, number] = yield task_model_1.default.findAndCount({ userId: userId });
            tasks.forEach((task) => __awaiter(this, void 0, void 0, function* () {
                yield task_model_1.default.update({ task_id: task.task_id }, { userId: 'null' });
            }));
            return;
        });
    }
}
exports.default = new Tasks();
//# sourceMappingURL=task.memory.repository.js.map