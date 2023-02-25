import express from "express";
const scoreRouter = express.Router()

const { hello } = require("./score.controller")

scoreRouter.get("/", hello)

module.exports = { scoreRouter}