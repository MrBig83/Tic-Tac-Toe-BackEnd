import express from "express";
const boardRouter = express.Router();

const { getBoard, createBoard, updateBoard, getSpecificBoard } = require("./board.controller")

boardRouter.get("/", getBoard)
boardRouter.get("/:_id", getSpecificBoard)
boardRouter.post("/new", createBoard)
boardRouter.put("/move/:_id", updateBoard)


module.exports = { boardRouter }