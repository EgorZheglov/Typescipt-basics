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
exports.initial1642658342974 = void 0;
class initial1642658342974 {
    constructor() {
        this.name = 'initial1642658342974';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "board" ("id" character varying NOT NULL, "title" character varying NOT NULL, "columns" character varying NOT NULL DEFAULT 'there gonna be columns', CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "task" ("id" character varying NOT NULL, "title" character varying NOT NULL, "columnId" character varying NOT NULL DEFAULT 'coming soon', "userId" character varying NOT NULL DEFAULT 'null', "boardId" character varying NOT NULL, "order" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "task"`);
            yield queryRunner.query(`DROP TABLE "board"`);
            yield queryRunner.query(`DROP TABLE "user"`);
        });
    }
}
exports.initial1642658342974 = initial1642658342974;
//# sourceMappingURL=1642658342974-initial.js.map