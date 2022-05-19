"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.signupUser = exports.loginUser = void 0;
const await_to_js_1 = __importDefault(require("await-to-js"));
const errmessages_1 = __importDefault(require("../common/errmessages"));
const user_controller_1 = require("../controllers/user-controller");
const jwt = __importStar(require("../libs/jwt"));
function loginUser(login, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const [err, user] = yield (0, await_to_js_1.default)((0, user_controller_1.findByLogin)(login));
        if (err || !user) {
            throw errmessages_1.default.ERROR_LOGIN;
        }
        if (user.password !== password) {
            throw errmessages_1.default.ERROR_LOGIN;
        }
        return jwt.create(user.id);
    });
}
exports.loginUser = loginUser;
function signupUser(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const [err, user] = yield (0, await_to_js_1.default)((0, user_controller_1.createUser)(payload));
        if (err && err.driverError.code === '23505') {
            throw errmessages_1.default.USER_ALREADY_EXISTS;
        }
        else if (err)
            throw err;
        return user;
    });
}
exports.signupUser = signupUser;
//# sourceMappingURL=auth-service.js.map