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
const board_service_1 = __importDefault(require("./board.service"));
const task_router_1 = __importDefault(require("../task/task.router"));
const task_service_1 = __importDefault(require("../task/task.service"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boards = yield board_service_1.default.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(boards);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    const board = yield board_service_1.default.createBoard(title);
    res.status(201).json(board);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const board = yield board_service_1.default.getBoard(id);
    if (board) {
        res.json(board);
    }
    else {
        res.status(404).json('Not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield board_service_1.default.deleteBoard(id);
    yield task_service_1.default.deleteWithBoard(id);
    res.status(204).send('deleted');
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const board = yield board_service_1.default.updateBoard(req.body, id);
    if (board) {
        return res.json(board);
    }
    else {
        res.status(404).json('Not found');
    }
}));
router.use(task_router_1.default);
exports.default = router;
//# sourceMappingURL=board.router.js.map