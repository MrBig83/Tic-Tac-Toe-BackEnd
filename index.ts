//import express from "express";
import mongoose from "mongoose";
//import app from "./app"
const { app } = require("./app")


//const app: express.Application = express();

const port:number = 3000;

main().catch((err) => console.log(err))

async function main(){
    console.log("Connected to DB & Webserver");
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/TicTacToe")

    app.listen(port, () => {
        console.log(`TypeScript with Express http://localhost:${port}`); 
    });
};