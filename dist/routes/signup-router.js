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
const user_middlewares_1 = require("../middlwares/user-middlewares");
const encrypt_1 = __importDefault(require("../libs/encrypt"));
const auth_service_1 = require("../services/auth-service");
const signup = (0, express_1.Router)();
signup.post('/signup', user_middlewares_1.userCreateMW, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        login: req.body.login,
        name: req.body.name,
        password: (0, encrypt_1.default)(req.body.password),
    };
    const [err, user] = yield (0, await_to_js_1.default)((0, auth_service_1.signupUser)(payload));
    if (err) {
        //TODO: next(err) coz can be different errors and statuses durning signup
        return res.status(500).send(err);
    }
    return res.status(201).send(user);
}));
exports.default = signup;
//# sourceMappingURL=signup-router.js.map