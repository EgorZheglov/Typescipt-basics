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
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./common/ormconfig"));
const user_router_1 = __importDefault(require("./routes/user-router"));
const signup_router_1 = __importDefault(require("./routes/signup-router"));
const login_router_1 = __importDefault(require("./routes/login-router"));
const board_router_1 = __importDefault(require("./routes/board-router"));
const checkToken_1 = __importDefault(require("./middlwares/checkToken"));
const error_handler_1 = __importDefault(require("./middlwares/error-handler"));
const app = (0, express_1.default)();
let server;
let db;
// const swaggerDocument: swaggerUI.JsonObject = YAML.load(
//    path.join(__dirname, '../doc/api.yaml')
// );
app.use(express_1.default.json());
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(signup_router_1.default);
app.use(login_router_1.default);
app.use(checkToken_1.default);
app.use('/boards', board_router_1.default);
app.use('/users', user_router_1.default);
app.use(error_handler_1.default);
exports.default = {
    start: (PORT) => __awaiter(void 0, void 0, void 0, function* () {
        server = app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
        yield (0, typeorm_1.createConnection)(ormconfig_1.default)
            .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('DB conncted');
            db = connection;
            yield connection
                .runMigrations()
                .catch((e) => console.log(`err durning migration ${e}`));
        }))
            .catch((err) => console.log(`DB NOT CONNCTED:${err}`));
        return server;
    }),
    stop: () => __awaiter(void 0, void 0, void 0, function* () {
        yield db.close();
        yield server.close();
    }),
};
//# sourceMappingURL=app.js.map