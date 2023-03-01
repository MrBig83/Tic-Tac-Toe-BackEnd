import express from "express";
import cors from "cors";

const app: express.Application = express();
const { scoreRouter } = require("./resources/score/score.router");
const { boardRouter } = require("./resources/board/board.router");

app.use(cors()) 
app.use(express.json());
app.use("/api/scorelist", scoreRouter);
app.use("/api/board", boardRouter);

app.get("/", (_req, res) => {
    res.status(200)
    res.send("ROOT Files. (index.html et.c.)");
});

module.exports = { app };