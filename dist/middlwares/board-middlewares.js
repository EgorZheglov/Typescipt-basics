"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardMw = void 0;
const board_validator_1 = require("../validators/board-validator");
const errmessages_1 = __importDefault(require("../common/errmessages"));
const boardMw = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, board_validator_1.boardCreateValidator)(payload);
    if (result.error) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.boardMw = boardMw;
//# sourceMappingURL=board-middlewares.js.map