"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateMW = exports.userUpdateMW = exports.userLoginMW = void 0;
const user_validator_1 = require("../validators/user-validator");
const errmessages_1 = __importDefault(require("../common/errmessages"));
const userLoginMW = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, user_validator_1.userLoginValidator)(payload);
    if (result.error) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.userLoginMW = userLoginMW;
const userUpdateMW = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, user_validator_1.userUpdateValidator)(payload);
    if (result.error) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.userUpdateMW = userUpdateMW;
const userCreateMW = (req, res, next) => {
    const payload = Object.assign({}, req.body);
    const result = (0, user_validator_1.userCreateValidator)(payload);
    if (result.error) {
        return next(errmessages_1.default.BAD_REQUEST);
    }
    else {
        return next();
    }
};
exports.userCreateMW = userCreateMW;
//# sourceMappingURL=user-middlewares.js.map