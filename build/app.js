"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import cors from "cors";
const app = (0, express_1.default)();
// const corsOptions = {
//     origin: "http://127.0.0.1:5500"
// };
//const { userRouter } = require("./resources/user/user.router");
const { scoreRouter } = require("./resources/score/score.router");
//app.use(cors(corsOptions))
app.use(express_1.default.json());
//app.use("/api/users", userRouter);
app.use("/api/scorelist", scoreRouter);
app.get("/", (_req, res) => {
    res.status(200);
    res.send("ROOT Files. (index.html et.c.)");
});
module.exports = { app };
