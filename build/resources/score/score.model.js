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
//const CardModel = models<ICard>("Card", cardSchema) || model("card", cardSchema);
exports.ScoreModel = (0, mongoose_1.model)('Score', exports.ScoreSchema);
//export const ScoreModel = models['score'] || model("score", scoreSchema);  
exports.default = exports.ScoreModel;
//module.exports = ScoreModel;
//module.exports = CardModel;
