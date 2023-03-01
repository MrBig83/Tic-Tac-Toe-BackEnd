"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModel = exports.BoardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BoardSchema = new mongoose_1.Schema({
    a: { type: String },
    b: { type: String },
    c: { type: String },
    d: { type: String },
    e: { type: String },
    f: { type: String },
    g: { type: String },
    h: { type: String },
    i: { type: String },
});
exports.BoardModel = (0, mongoose_1.model)('Board', exports.BoardSchema);
exports.default = exports.BoardModel;
