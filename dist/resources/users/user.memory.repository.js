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
const user_model_1 = __importDefault(require("./user.model"));
class Users {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: mock implementation. should be replaced during task development
            const [users, number] = yield user_model_1.default.findAndCount();
            return users;
        });
    }
    getUser(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findOne(ID);
        });
    }
    createUser(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.default.create(Object.assign({}, userInfo));
            yield user_model_1.default.save(user);
            return user;
        });
    }
    deleteUser(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.delete(ID);
            return 'user deleted';
        });
    }
    updateUser(userInfo, ID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.update({ id: ID }, userInfo);
            return yield user_model_1.default.findOne(ID);
        });
    }
}
exports.default = new Users();
//# sourceMappingURL=user.memory.repository.js.map