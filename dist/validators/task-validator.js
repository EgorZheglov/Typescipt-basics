"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateValidator = exports.taskCreateValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const taskCreateValidator = (data) => {
    const title = joi_1.default.string().min(2).max(30);
    const order = joi_1.default.string();
    const description = joi_1.default.string().min(2).max(200);
    const schema = joi_1.default.object({
        title: title.required(),
        order: order.required(),
        description: description.required(),
    });
    return schema.validate(data);
};
exports.taskCreateValidator = taskCreateValidator;
const taskUpdateValidator = (data) => {
    const title = joi_1.default.string().min(2).max(30);
    const order = joi_1.default.string();
    const description = joi_1.default.string().min(2).max(200);
    const status = joi_1.default.string();
    const schema = joi_1.default.object({
        title: title,
        order: order,
        description: description,
        status: status,
    });
    return schema.validate(data);
};
exports.taskUpdateValidator = taskUpdateValidator;
//# sourceMappingURL=task-validator.js.map