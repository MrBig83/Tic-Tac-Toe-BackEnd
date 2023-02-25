import express from "express";

//import cors from "cors";

const app: express.Application = express();

// const corsOptions = {
//     origin: "http://127.0.0.1:5500"
// };

//const { userRouter } = require("./resources/user/user.router");
const { scoreRouter } = require("./resources/score/score.router");
const { boardRouter } = require("./resources/board/board.router");




//app.use(cors(corsOptions))
app.use(express.json());
//app.use("/api/users", userRouter);
app.use("/api/scorelist", scoreRouter);
app.use("/api/board", boardRouter);





app.get("/", (_req, res) => {
    res.status(200)
    res.send("ROOT Files. (index.html et.c.)");
});



module.exports = { app };