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
exports.renameBoardId1642658563264 = void 0;
class renameBoardId1642658563264 {
    constructor() {
        this.name = 'renameBoardId1642658563264';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "id" TO "board_id"`);
            yield queryRunner.query(`ALTER TABLE "board" RENAME CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" TO "PK_bd86e5e77833cf112439f9af37b"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "board" RENAME CONSTRAINT "PK_bd86e5e77833cf112439f9af37b" TO "PK_865a0f2e22c140d261b1df80eb1"`);
            yield queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "board_id" TO "id"`);
        });
    }
}
exports.renameBoardId1642658563264 = renameBoardId1642658563264;
//# sourceMappingURL=1642658563264-rename_board_id.js.map