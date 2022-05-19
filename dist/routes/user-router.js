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
const user_controller_1 = require("../controllers/user-controller");
const restrict_response_1 = __importDefault(require("../libs/restrict-response"));
const user_middlewares_1 = require("../middlwares/user-middlewares");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_controller_1.getAll)();
    // map user fields to exclude secret field like "password"
    res.status(200).send(users);
}));
router.post('/', user_middlewares_1.userCreateMW, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //soon will be using only for admins
    const { name, login, password } = req.body;
    const user = yield (0, user_controller_1.createUser)({ name, login, password });
    res.status(201).send((0, restrict_response_1.default)(user));
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, user_controller_1.getUserById)(id);
    if (user) {
        res.status(200).json((0, restrict_response_1.default)(user));
    }
    else {
        res.status(404).json('Not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield (0, user_controller_1.deleteUser)(id);
    // await taskService.removedUserUpdate(id);
    res.status(204).send('User deleted');
}));
router.put('/:id', user_middlewares_1.userUpdateMW, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, user_controller_1.updateUser)(req.body, id);
    if (user) {
        return res.json((0, restrict_response_1.default)(user));
    }
    else {
        res.status(404).json('Not found');
    }
}));
exports.default = router;
//# sourceMappingURL=user-router.js.map