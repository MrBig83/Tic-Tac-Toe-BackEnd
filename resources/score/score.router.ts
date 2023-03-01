import express from "express";
const scoreRouter = express.Router()

const { getScoreList, postScore, getPlayer, updateScore, updateBio } = require("./score.controller")


scoreRouter.get("/", getScoreList)
scoreRouter.get("/:player", getPlayer)
scoreRouter.post("/", postScore)
scoreRouter.put("/:player", updateScore)
scoreRouter.put("/bio/:player", updateBio)


module.exports = { scoreRouter }