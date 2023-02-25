import express from "express";
const scoreRouter = express.Router()

const { getScoreList, postScore } = require("./score.controller")


scoreRouter.get("/", getScoreList)
scoreRouter.post("/", postScore)


module.exports = { scoreRouter }