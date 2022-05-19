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
exports.findByLogin = exports.updateUser = exports.deleteUser = exports.getUserById = exports.createUser = exports.getAll = void 0;
const user_model_1 = __importDefault(require("../db/models/user-model"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const [users, number] = yield user_model_1.default.findAndCount();
        return users;
    });
}
exports.getAll = getAll;
function getUserById(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne(ID);
    });
}
exports.getUserById = getUserById;
function findByLogin(login) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ login: login });
    });
}
exports.findByLogin = findByLogin;
function createUser(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.create(Object.assign({}, userInfo));
        yield user_model_1.default.save(user);
        return user;
    });
}
exports.createUser = createUser;
function deleteUser(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield user_model_1.default.delete(ID);
        return 'user deleted';
    });
}
exports.deleteUser = deleteUser;
function updateUser(userInfo, ID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield user_model_1.default.update({ id: ID }, userInfo);
        return yield user_model_1.default.findOne(ID);
    });
}
exports.updateUser = updateUser;
//# sourceMappingURL=user-controller.js.map