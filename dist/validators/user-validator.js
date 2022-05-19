"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginValidator = exports.userUpdateValidator = exports.userCreateValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const userCreateValidator = (data) => {
    const login = joi_1.default.string().min(2).max(100);
    const name = joi_1.default.string().required();
    const password = joi_1.default.string().min(2).max(100);
    const schema = joi_1.default.object({
        login: login.required(),
        name: name.required(),
        password: password.required(),
    });
    return schema.validate(data);
};
exports.userCreateValidator = userCreateValidator;
const userUpdateValidator = (data) => {
    const login = joi_1.default.string().min(2).max(100);
    const name = joi_1.default.string();
    const password = joi_1.default.string().min(2).max(100);
    const schema = joi_1.default.object({
        login: login,
        name: name,
        password: password,
    });
    return schema.validate(data);
};
exports.userUpdateValidator = userUpdateValidator;
const userLoginValidator = (data) => {
    const login = joi_1.default.string().min(2).max(100);
    const password = joi_1.default.string().min(2).max(100);
    const schema = joi_1.default.object({
        login: login.required(),
        password: password.required(),
    });
    return schema.validate(data);
};
exports.userLoginValidator = userLoginValidator;
//# sourceMappingURL=user-validator.js.map