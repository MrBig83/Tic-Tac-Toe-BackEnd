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
const score_model_1 = __importDefault(require("./score.model"));
function getScoreList(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const scoreList = yield score_model_1.default.find().exec();
            res.status(200).json(scoreList);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });
}
function getPlayer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const player = yield score_model_1.default.findOne(req.params).exec();
            if (!player) {
                res.status(404).send("Player not found");
            }
            res.status(200).json(player);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });
}
function postScore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const score = yield new score_model_1.default(req.body);
            yield score.save();
            return res.status(201).json("Sparad användare");
        }
        catch (error) {
            console.log(error);
            return res.status(401).json(req.body.player + " - username already exists");
        }
        return res.status(200).json("Detta är utanför Try-Catch");
    });
}
function updateScore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield score_model_1.default.findOneAndUpdate(req.params, req.body);
            const uppdatedScore = yield score_model_1.default.findOne(req.params).exec();
            if (!uppdatedScore) {
                return res.status(404).json("Player doesnt exist");
            }
            return res.status(201).json(uppdatedScore);
        }
        catch (error) {
            console.log(error);
            return res.status(401).json("Bad creds");
        }
    });
}
function updateBio(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield score_model_1.default.findOneAndUpdate(req.params, req.body);
            const uppdatedScore = yield score_model_1.default.findOne(req.params).exec();
            if (!uppdatedScore) {
                return res.status(404).json("Player doesnt exist");
            }
            return res.status(201).json(uppdatedScore);
        }
        catch (error) {
            console.log(error);
            return res.status(401).json("Bad creds");
        }
    });
}
module.exports = { getScoreList, postScore, getPlayer, updateScore, updateBio };
