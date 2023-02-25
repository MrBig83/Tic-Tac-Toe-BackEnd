"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boardRouter = express_1.default.Router();
const { getBoard, createBoard } = require("./board.controller");
boardRouter.get("/", getBoard);
boardRouter.post("/new", createBoard);
module.exports = { boardRouter };
