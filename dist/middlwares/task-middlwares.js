"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateMW = exports.taskCreateMW = void 0;
const task_validator_1 = require("../validators/task-validator");
const errmessages_1 = __importDefault(require("../common/errmessages"));
const taskCreateMW = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, task_validator_1.taskCreateValidator)(payload);
    if (result.error) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.taskCreateMW = taskCreateMW;
const taskUpdateMW = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, task_validator_1.taskUpdateValidator)(payload);
    if (result.error || payload === {}) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.taskUpdateMW = taskUpdateMW;
//# sourceMappingURL=task-middlwares.js.map