"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModel = exports.BoardSchema = void 0;
const mongoose_1 = require("mongoose"); //, models
exports.BoardSchema = new mongoose_1.Schema({
    1: { type: String },
    2: { type: String },
    3: { type: String },
    4: { type: String },
    5: { type: String },
    6: { type: String },
    7: { type: String },
    8: { type: String },
    9: { type: String },
    //categories: { type: [Schema.Types.ObjectId], ref: "category" , //Detta är en FK, mer jobb krävs. 
});
exports.BoardModel = (0, mongoose_1.model)('Board', exports.BoardSchema);
exports.default = exports.BoardModel;
