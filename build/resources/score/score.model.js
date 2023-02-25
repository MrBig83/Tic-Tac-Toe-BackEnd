"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreModel = exports.ScoreSchema = void 0;
const mongoose_1 = require("mongoose"); //, models
exports.ScoreSchema = new mongoose_1.Schema({
    player: { type: String, required: true, unique: true },
    score: { type: Number, required: true },
    bio: { type: String, required: true },
    //categories: { type: [Schema.Types.ObjectId], ref: "category", required: true}, //Detta är en FK, mer jobb krävs. 
});
exports.ScoreModel = (0, mongoose_1.model)('Score', exports.ScoreSchema);
exports.default = exports.ScoreModel;
