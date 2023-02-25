import express from "express";
const boardRouter = express.Router();

const { getBoard, createBoard } = require("./board.controller")

boardRouter.get("/", getBoard)
boardRouter.post("/new", createBoard)


module.exports = { boardRouter }