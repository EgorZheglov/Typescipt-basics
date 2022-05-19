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
const express_1 = require("express");
const task_middlwares_1 = require("../middlwares/task-middlwares");
const task_controller_1 = require("../controllers/task-controller");
const await_to_js_1 = __importDefault(require("await-to-js"));
const errmessages_1 = __importDefault(require("../common/errmessages"));
const router = (0, express_1.Router)();
router.get('/:boardId/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    const [err, tasks] = yield (0, await_to_js_1.default)((0, task_controller_1.getAll)(boardId));
    if (err) {
        console.log(err);
        return res.status(500).send(errmessages_1.default.ERROR_DURING_EXECUTING);
    }
    // map user fields to exclude secret fields like "password"
    res.json(tasks);
}));
router.post('/:boardId/tasks', task_middlwares_1.taskCreateMW, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    const task = yield (0, task_controller_1.createTask)(req.body, boardId);
    res.status(201).json(task);
}));
router.get('/:boardId/tasks/:taskId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const task = yield (0, task_controller_1.getTask)(boardId, taskId);
    if (task) {
        res.json(task);
    }
}));
router.delete('/:boardId/tasks/:taskId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const response = yield (0, task_controller_1.deleteTask)(boardId, taskId);
    res.status(200).send(response);
}));
router.put('/:boardId/tasks/:taskId', task_middlwares_1.taskUpdateMW, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const task = yield (0, task_controller_1.updateTask)(req.body, boardId, taskId);
    if (task) {
        return res.json(task);
    }
}));
exports.default = router;
//# sourceMappingURL=task-router.js.map