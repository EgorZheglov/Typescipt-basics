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
const await_to_js_1 = __importDefault(require("await-to-js"));
const encrypt_1 = __importDefault(require("../libs/encrypt"));
const auth_service_1 = require("../services/auth-service");
const user_middlewares_1 = require("../middlwares/user-middlewares");
const login = (0, express_1.Router)();
login.post('/login', user_middlewares_1.userLoginMW, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, password } = req.body;
    const [err, result] = yield (0, await_to_js_1.default)((0, auth_service_1.loginUser)(login, (0, encrypt_1.default)(password)));
    if (err) {
        return res.status(400).send(err);
    }
    return res.status(200).send({ access_token: result });
}));
exports.default = login;
//# sourceMappingURL=login-router.js.map