"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scoreRouter = express_1.default.Router();
const { getScoreList, postScore, getPlayer, updateScore, updateBio } = require("./score.controller");
scoreRouter.get("/", getScoreList);
scoreRouter.get("/:player", getPlayer);
scoreRouter.post("/", postScore);
scoreRouter.put("/:player", updateScore);
scoreRouter.put("/bio/:player", updateBio);
module.exports = { scoreRouter };
