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
exports.userAndTaskRelate1648397103973 = void 0;
class userAndTaskRelate1648397103973 {
    constructor() {
        this.name = 'userAndTaskRelate1648397103973';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "columns_a" TO "tasks"`);
            yield queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
            yield queryRunner.query(`ALTER TABLE "task" ADD "userId" uuid`);
            yield queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "tasks" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
            yield queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "tasks" SET DEFAULT 'there gonna be columns'`);
            yield queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
            yield queryRunner.query(`ALTER TABLE "task" ADD "userId" character varying NOT NULL DEFAULT 'null'`);
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "tasks" TO "columns_a"`);
        });
    }
}
exports.userAndTaskRelate1648397103973 = userAndTaskRelate1648397103973;
//# sourceMappingURL=1648397103973-userAndTaskRelate.js.map