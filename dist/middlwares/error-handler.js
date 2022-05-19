"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.log('get Error', err);
    res.status(400).send(err);
    //soon will get all exceptions and check for Errors/statuses/messages then send it to user
};
//# sourceMappingURL=error-handler.js.map