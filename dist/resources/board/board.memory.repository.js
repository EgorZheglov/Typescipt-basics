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
const board_model_1 = __importDefault(require("./board.model"));
class Boards {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [boards, number] = yield board_model_1.default.findAndCount();
            return boards;
        });
    }
    getBoard(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: understand why at the end of id... i killed 3 days
            return yield board_model_1.default.find({ board_id: ID.slice(0, 10) });
        });
    }
    createBoard(boardTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield board_model_1.default.create({ title: boardTitle });
            yield board_model_1.default.save(board);
            return board;
        });
    }
    deleteBoard(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield board_model_1.default.delete(ID);
            return 'board deleted';
        });
    }
    updateBoard(boardInfo, ID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield board_model_1.default.update({ board_id: ID }, boardInfo);
            return yield board_model_1.default.findOne(ID);
        });
    }
}
exports.default = new Boards();
//# sourceMappingURL=board.memory.repository.js.map