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
const board_middlewares_1 = require("../middlwares/board-middlewares");
const board_controller_1 = require("../controllers/board-controller");
const task_router_1 = __importDefault(require("./task-router"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const errmessages_1 = __importDefault(require("../common/errmessages"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [err, boards] = yield (0, await_to_js_1.default)((0, board_controller_1.getAll)());
    if (err) {
        return res.status(500).send(errmessages_1.default.ERROR_DURING_EXECUTING);
    }
    res.json(boards);
}));
router.post('/', board_middlewares_1.boardMw, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    const board = yield (0, board_controller_1.createBoard)(title);
    res.status(201).json(board);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const [err, board] = yield (0, await_to_js_1.default)((0, board_controller_1.getBoard)(id));
    if (board) {
        res.json(board);
    }
    else {
        res.status(404).json('Not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield (0, board_controller_1.deleteBoard)(id);
    res.status(204).send('deleted');
}));
router.put('/:id', board_middlewares_1.boardMw, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const board = yield (0, board_controller_1.updateBoard)(req.body, id);
    if (board) {
        return res.status(200).send(board);
    }
    else {
        res.status(404).json('Not found');
    }
}));
router.use(task_router_1.default);
exports.default = router;
//# sourceMappingURL=board-router.js.map