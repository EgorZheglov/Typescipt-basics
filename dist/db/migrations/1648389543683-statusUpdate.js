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
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusUpdate1648389543683 = void 0;
class statusUpdate1648389543683 {
    constructor() {
        this.name = 'statusUpdate1648389543683';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "columns_a" TO "tasks"`);
            yield queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "tasks" DROP DEFAULT`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "tasks" SET DEFAULT 'there gonna be columns'`);
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "tasks" TO "columns_a"`);
        });
    }
}
exports.statusUpdate1648389543683 = statusUpdate1648389543683;
//# sourceMappingURL=1648389543683-statusUpdate.js.map