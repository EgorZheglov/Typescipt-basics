"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const ormconfig_1 = __importDefault(require("./common/ormconfig"));
console.log('DB config:', ormconfig_1.default);
app_1.default.start(Number(process.env.PORT));
//# sourceMappingURL=server.js.map