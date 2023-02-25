import express from "express";
const boardRouter = express.Router();

const { getBoard, createBoard, updateBoard } = require("./board.controller")

boardRouter.get("/", getBoard)
boardRouter.post("/new", createBoard)
boardRouter.put("/move/:_id", updateBoard)


module.exports = { boardRouter }