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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_model_1 = __importDefault(require("./board.model"));
function createBoard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const board = yield new board_model_1.default(req.body);
            yield board.save();
            return res.status(200).json(board._id);
        }
        catch (error) {
            console.log(error);
            return res.status(401).json("Cant create board");
        }
        return res.status(200).json("Detta är utanför Try-Catch");
    });
}
function getBoard(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const board = yield board_model_1.default.find().exec();
            res.status(200).json(board);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });
}
function getSpecificBoard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const specificBoard = yield board_model_1.default.findById(req.params);
            return res.status(200).json(specificBoard);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json("Bad request. Board not found");
        }
    });
}
function updateBoard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const board = yield board_model_1.default.findById(req.params);
            board[req.body.pos] = req.body.symbol;
            yield board.save();
            return res.status(200).json(board);
        }
        catch (error) {
            console.log(error);
            return res.status(401).json("Bad input");
        }
    });
}
module.exports = { getBoard, createBoard, updateBoard, getSpecificBoard };
