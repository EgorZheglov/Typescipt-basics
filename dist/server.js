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
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./common/ormconfig"));
console.log('DB config:', ormconfig_1.default);
(0, typeorm_1.createConnection)(ormconfig_1.default)
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('DB conncted');
    yield connection
        .runMigrations()
        .catch((e) => console.log(`err durning migration ${e}`));
    app_1.default.listen(process.env.PORT, () => console.log(`App is running on http://localhost:${process.env.PORT}`));
}))
    .catch((err) => console.log(`DB NOT CONNCTED:${err}`));
//# sourceMappingURL=server.js.map