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
exports.updateBoard = exports.deleteBoard = exports.getBoard = exports.createBoard = exports.getAll = void 0;
const board_model_1 = __importDefault(require("../db/models/board-model"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const boards = yield board_model_1.default.find({ relations: ['tasks'] });
        return boards;
    });
}
exports.getAll = getAll;
function getBoard(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield board_model_1.default.find({ board_id: ID });
    });
}
exports.getBoard = getBoard;
function createBoard(boardTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        const board = yield board_model_1.default.create({ title: boardTitle });
        yield board_model_1.default.save(board);
        return board;
    });
}
exports.createBoard = createBoard;
function deleteBoard(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield board_model_1.default.delete(ID);
        return 'board deleted';
    });
}
exports.deleteBoard = deleteBoard;
function updateBoard(boardInfo, ID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield board_model_1.default.update({ board_id: ID }, boardInfo);
        return yield board_model_1.default.findOne(ID);
    });
}
exports.updateBoard = updateBoard;
//# sourceMappingURL=board-controller.js.map