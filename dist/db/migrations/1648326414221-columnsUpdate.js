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
exports.columnsUpdate1648326414221 = void 0;
class columnsUpdate1648326414221 {
    constructor() {
        this.name = 'columnsUpdate1648326414221';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" DROP COLUMN "todo"`);
            yield queryRunner.query(`ALTER TABLE "board" DROP COLUMN "inreview"`);
            yield queryRunner.query(`ALTER TABLE "board" DROP COLUMN "done"`);
            yield queryRunner.query(`ALTER TABLE "board" ADD "columns_a" character varying NOT NULL DEFAULT 'there gonna be columns'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" DROP COLUMN "columns_a"`);
            yield queryRunner.query(`ALTER TABLE "board" ADD "done" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "board" ADD "inreview" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "board" ADD "todo" character varying NOT NULL`);
        });
    }
}
exports.columnsUpdate1648326414221 = columnsUpdate1648326414221;
//# sourceMappingURL=1648326414221-columnsUpdate.js.map