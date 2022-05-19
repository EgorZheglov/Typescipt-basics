"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
exports.default = (str) => crypto_1.default.createHash('md5').update(str).digest('hex');
//# sourceMappingURL=encrypt.js.map