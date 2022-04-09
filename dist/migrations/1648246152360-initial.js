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
exports.initial1648246152360 = void 0;
class initial1648246152360 {
    constructor() {
        this.name = 'initial1648246152360';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "board" ("board_id" SERIAL NOT NULL, "title" character varying NOT NULL, "columns" character varying NOT NULL DEFAULT 'there gonna be columns', CONSTRAINT "PK_bd86e5e77833cf112439f9af37b" PRIMARY KEY ("board_id"))`);
            yield queryRunner.query(`CREATE TABLE "task" ("task_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "columnId" character varying NOT NULL DEFAULT 'coming soon', "userId" character varying NOT NULL DEFAULT 'null', "boardId" character varying NOT NULL, "order" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_721f914bb100703f201a77dd58f" PRIMARY KEY ("task_id"))`);
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
exports.initial1648246152360 = initial1648246152360;
//# sourceMappingURL=1648246152360-initial.js.map