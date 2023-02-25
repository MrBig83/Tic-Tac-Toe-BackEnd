"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scoreRouter = express_1.default.Router();
const { getScoreList, postScore } = require("./score.controller");
scoreRouter.get("/", getScoreList);
scoreRouter.post("/", postScore);
module.exports = { scoreRouter };
